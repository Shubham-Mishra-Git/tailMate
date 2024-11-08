import express from 'express';
import connectDB from './config/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
