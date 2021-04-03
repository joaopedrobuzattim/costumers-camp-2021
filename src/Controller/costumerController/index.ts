import { Request, Response, NextFunction } from 'express';
import { costumerModel }  from '../../Model/costumerModel';

const Costumer = new costumerModel();

export class costumerController{

    async getAll( req: Request, res: Response): Promise<Response>{

        try {
            const costumers = await Costumer.getAll();
            return res.json(costumers.rows);
        } catch ( error ) {
            console.error(error);
            return res.status(200).json({ error: error })
        }

    }

    async getOne(req: Request, res: Response): Promise<Response> {

        
        try {
            const { id } = req.params;
            const costumer = await Costumer.getOne(id);
            return res.status(200).json(costumer.rows);
        } catch (error) {
            console.error(error);
            return res.json({ error: error })
        }

    }

    async createOne(req: Request, res: Response): Promise<Response>{

        try {
            const { first_name, last_name, email, address, cpf  } = req.body;
            const costumer = await Costumer.createOne({first_name, last_name, email, address, cpf});
            return res.status(201).json({ 
                message: `User ${email} created!`
            });
        } catch (error) {
            console.error(error);
            return res.json({ error: error })
        }

    }

    async updateOne(req: Request, res: Response){

        try {
            const { id } = req.params;
            const { body } = req;
            const costumer = await Promise.all(Costumer.updateOne(id, body));
            return res.status(200).json({message: "Updated!"});
        } catch (error) {
            console.error(error);
            return res.json({ error: error });
        }
    }

    async deleteOne(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const costumer = await Costumer.deleteOne(id);
            return res.status(200).json({message: "Deleted!"});
        } catch (error) {
            console.error(error);
            return res.json({ error: error });
        }
    }

}