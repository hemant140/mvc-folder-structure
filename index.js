import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 9000

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ status: true, message: `Server is running port: ${PORT}` })
})

app.listen(PORT, () => {
    console.log(`Server is running port: ${PORT}`)
})