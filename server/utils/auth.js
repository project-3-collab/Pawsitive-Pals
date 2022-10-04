const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = process.env.SECRET_KEY ||'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({ req, res }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return res.status(400).json({ message: 'You have no token!' });
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
      return res.status(400).json({ message: 'invalid token!' });
    }

    return req;
  },
  signToken: function ({ username, email, password, admin, _id }) {
    const payload = {  username, email, password, admin, _id  };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};