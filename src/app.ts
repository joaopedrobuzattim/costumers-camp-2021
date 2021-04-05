import express, { Request, Response } from 'express';
import { router as costumerRoutes } from './routes/costumerRoutes'; 
const app = express();

app.use(express.json());

app.use('/api/v1/costumers', costumerRoutes);

app.use('*', (req: Request, res: Response) => (
    res.status(404).json({
        message: `Can't find ${req.originalUrl} on this server!`
    })
))


export { app };