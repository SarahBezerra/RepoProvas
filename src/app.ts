import express, {json} from 'express';
import 'express-async-errors'
import cors from 'cors';
import dotenv from "dotenv";
import router from './routers/index.js';
import errorHandlerMiddleware from './middlewares/errorHandlerMIddleware.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandlerMiddleware);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`)
});
