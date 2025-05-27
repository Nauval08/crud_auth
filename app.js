require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors'); // ← tambahkan ini
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());
app.use(cors()); // ← tambahkan ini sebelum routes
app.use('/api', userRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));