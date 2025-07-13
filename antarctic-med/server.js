require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 5000;
const API_GATEWAY_URL = process.env.AWS_API_GATEWAY_URL;

app.get('/api/metrics', async (req, res) => {
    const user_id = req.query.user_id;
    if(!user_id) return res.status(400).json({ error: 'user_id query parameter is required' });

    try{
        const url = `${API_GATEWAY_URL}?user_id=${encodeURIComponent(user_id)}`;
        const response = await fetch(url, {method: 'GET', headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' } });
        const data = await response.json();
        res.status(response.status).json(data);
    }
    catch(error){
        res.status(500).json({ error: 'Error fetching metrics', details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
});