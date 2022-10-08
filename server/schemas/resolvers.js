const { User, PlaydateRequest, Pet } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      return await User.findById(context.user._id);
    },
    //check the context (make sure only admin can see)
    playdateRequests: async (parent, args,context) => {
      const response = await PlaydateRequest.find();
      return response;
    },
    
  },

  Mutation: {
    createUser: async (parent, { username, email, password, admin, firstname, lastname, phone, license, age, birthdate, experience, housing, address, city, state, zipcode, country}, context) => {
      const user = await User.create({ username, email, password, admin, firstname, lastname, phone, license, age, birthdate, experience, housing, address, city, state, zipcode, country});
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const adminStatus = user.admin;

      // if (!adminStatus) {
      //   throw new AuthenticationError('Denied access')
      // }

      const token = signToken(user);

      return { token, user };
    },

    savePet: async (parent, { name, description, petId, image, link, type }, context) => {

      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { savedPets: { name, description, petId, image, link, type } }

          },
          { new: true }
        );
      }

      throw new AuthenticationError('You need to be logged in!');

    },

    deletePet: async (parent, { _id }, context) => {

      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: { savedPets: { _id:_id } }
          },
          { new: true }
        );
      }

      throw new AuthenticationError('You need to be logged in!');

    },

    submitRequest: async (parent, args, context) => {
      if (context.user) {
        console.log(context.user);
        const playdateRequest = await PlaydateRequest.create({
          ...args.input,
          pet: {
            name: args.input.petInput.name,
            petId: args.input.petInput.petId,
            type: args.input.petInput.type
          },
          requester: context.user.username
        });
        
        await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { submittedRequests: playdateRequest.id}
          }
        );
          
        return playdateRequest;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    validatePlaydateRequest: async (parent, {petInput, approvalStatus}, context) => {
      if (context.user) {
        const response = await PlaydateRequest.findOne({"pet.petId": petInput.petId, approvalStatus: approvalStatus, requester: context.user.username});
        return response !== null;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    requester: async (parent, {username}) => {
      return await User.findOne({ username: username});
    },
    processApplication: async (parent, {_id, approvalStatus}) => {
      return  await PlaydateRequest.findOneAndUpdate({_id: _id}, {approvalStatus: approvalStatus});
    }  
}}

module.exports = resolvers;