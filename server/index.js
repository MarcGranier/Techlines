import dotenv from 'dotenv';
dotenv.config();
import dbConnect from './db.js';
import express from 'express';
import cors from 'cors';
import colors from 'colors';

// Routes
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

dbConnect();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

const port = process.env.PORT;

app.get('/', (req, res) => {
	res.send('API is running'.green.bold);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`.green.bold);
});
