// auth.js middleware: JWT verification and role guard
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = (role) => async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: 'No token.' });
  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: 'User not found.' });
    if (role && user.role !== role) return res.status(403).json({ message: 'Forbidden.' });
    req.user = { id: user._id, role: user.role };
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token.' });
  }
};
