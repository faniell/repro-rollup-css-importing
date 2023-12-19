// server.js
// Express server

import express from 'express';
import path from "path";
import { fileURLToPath } from "url";

// To replace __dirname variable in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static assets from the 'build' folder
app.use('/build', express.static(path.join(__dirname, 'build')));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});