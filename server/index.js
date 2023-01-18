import express from "express";
import path from 'path';
import mongoose from "mongoose";
import {conf} from "./config.js";
import router from "./router.js";
import corsMiddleware from "./middleware/cors.middleware.js";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//const DB_URL = "mongodb+srv://user:user123@cluster0.mcfsae1.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use('/auth', router);

if(process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, '..', 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
    });
}

const start = async () => {
    try {
        await mongoose.connect(conf.DB_URL);
        const PORT = process.env.PORT || conf.PORT;
        app.listen(PORT, () => console.log('Server started on port ' + PORT));
    } catch (e) {
        console.log(e);
    }
}
start();