import express from 'express';
import { costumerController } from '../../Controller/costumerController';

const controller = new costumerController();

const router = express.Router();

router
.route('/')
.get(controller.getAll)
.post(controller.createOne)

router
.route('/:id')
.get(controller.getOne)
.put(controller.updateOne)
.delete(controller.deleteOne)





export { router };