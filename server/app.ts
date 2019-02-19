import express from "express";
import cors from 'cors';
import Routes from "./routes/routes";

const routes = new Routes();
/**
 * @description App configs
 */
class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.init();
  }

  /**
   * @description method to initialize the app route
   */
  private init(): void {
    this.app.use(cors());
    routes.init(this.app);
  }
  

}

export default new App().app;
