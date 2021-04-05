import { Request, Response } from 'express';
import { costumerModel }  from '../../Model/costumerModel';

const Costumer = new costumerModel();

export class costumerController{

    async getAll( req: Request, res: Response): Promise<Response>{

        try {
            const costumers = await Costumer.getAll();
            return res.status(200).json(costumers.rows);
        } catch ( err) {
            const error: Error = err;
            return res.status(400).json({ error: error.message })
        }

    }

    async getOne(req: Request, res: Response): Promise<Response> {

        
        try {
            const { id } = req.params;
            const costumer = await Costumer.getOne(id);
            return res.status(200).json(costumer.rows);
        } catch (err) {
            const error: Error = err;
            return res.status(400).json({ error: error.message })
        }

    }

    async createOne(req: Request, res: Response): Promise<Response>{

        try {
            const { first_name, last_name, email, address, cpf  } = req.body;
            await Costumer.createOne({first_name, last_name, email, address, cpf});
            return res.status(201).json({ 
                message: `Costumer ${email} created!`
            });
        } catch (err) {
            const error: Error = err;
            return res.status(400).json({ error: error.message })
        }

    }

    async updateOne(req: Request, res: Response): Promise<Response>{

        try {
            const { id } = req.params;
            const { body } = req;

            const updatedCostumer = await Promise.all(Costumer.updateOne(id, body));

            if(updatedCostumer[0].rowCount === 0)
                throw new Error('Costumer not found!')

            return res.status(200).json({message: "Updated!"});
        } catch (err) {
            const error: Error = err;
            return res.status(400).json({ error: error.message });
        }
    }

    async deleteOne(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const deletedCostumer = await Costumer.deleteOne(id);

            if(deletedCostumer.rowCount === 0)
                throw new Error('Costumer not found!')

            return res.status(200).json({message: 'Deleted!'})
        } catch (err) {
            const error: Error = err;
            return res.status(400).json({ error: error.message });
        }
    }

}