import cors from 'cors';
import express from 'express';
import axios from 'axios';

const app = express();

app.get('/', (req, res) => {
    res.json({ 'data': 'oi' })
}) 

export default app