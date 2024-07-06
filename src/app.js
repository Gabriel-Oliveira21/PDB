const express = require('express');
const connectDB = require('./config/database');
const carRoutes = require('./routes/carRoutes');
const clientRoutes = require('./routes/clientRoutes');
const rentalRoutes = require('./routes/rentalRoutes');

const app = express();

// Conectando com o banco de dados
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Eotas
app.use('/api', carRoutes);
app.use('/api', clientRoutes);
app.use('/api', rentalRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
