import express from "express"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
});

app.listen(3000, () => {
    console.log("Server running on port 3000")
})