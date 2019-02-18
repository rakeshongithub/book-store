import express from "express";
import BookController from "../controllers/bookController";

const router = express.Router();
const bookController = new BookController();

/**
 * @description Main Route class to define all route related to the app
 */
export default class Routes {
    public init(app: express.Application): void {
        router.get("/books/all", bookController.getBooksList);
        router.get("/geners/all", bookController.getGenersList);

        app.use("/api", router);
    }
}
