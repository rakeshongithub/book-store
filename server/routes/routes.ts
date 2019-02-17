import express from 'express';
import Controller from './../controllers/controller';

const router = express.Router();
const controller = new Controller();

export default class Routes {
    init(app:express.Application): void {
        router.get('/list', controller.getBooksList);
        app.use('/api', router);
    }
}