const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// TODO: Import and use routes
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

mongoose.connect('mongodb://localhost:27017/multivendor', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

app.get('/', (req, res) => {
  res.send('Multi-Vendor E-Commerce API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
