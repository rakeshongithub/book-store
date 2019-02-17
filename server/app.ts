import express from 'express';
import Routes from './routes/routes';

const routes = new Routes();
/**
 * @description App configs
 */
class App {
  app: express.Application;

  constructor () {
    this.app = express();
    this.init();
  }

  private init(): void {
    routes.init(this.app);
  }
  
}

export default new App().app;