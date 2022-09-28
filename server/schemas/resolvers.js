const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      return User.findById(context.user._id)
    },
  },

  Mutation: {

    createUser: async (parent, { username, email, password }, context) => {
      const user = await User.create({ username, email, password });
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

      const token = signToken(user);

      return { token, user };
    },

    saveBook: async (parent, { authors, description, bookId, image, link, title }, context) => {

      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { savedBooks: { authors, description, bookId, image, link, title } }
          },
          { new: true }
        );
      }

      throw new AuthenticationError('You need to be logged in!');

    },

    deleteBook: async (parent, { _id }, context) => {

      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: { savedBooks: { _id:_id } }
          },
          { new: true }
        );
      }

      throw new AuthenticationError('You need to be logged in!');

    },

  }
};

module.exports = resolvers;
