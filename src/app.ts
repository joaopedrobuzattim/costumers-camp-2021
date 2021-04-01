import express from 'express';
import { router as costumerRoutes } from './routes/costumerRoutes'; 
const app = express();

app.use(express.json());

app.use('/api/v1/costumers', costumerRoutes);


export { app };