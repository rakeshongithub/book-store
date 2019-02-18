import {booksList} from "../mock/mock.json";

/**
 * @description Book Controller Class
 */
export default class BookController {

    /**
     * @description method to get all book list
     * @param req
     * @param res
     */
    public getBooksList(req: any, res: any): void {
        res.send(booksList);
    }

    /**
     * @description method to get all geners list
     * @param req
     * @param res
     */
    public getGenersList(req: any, res: any): void {
        const geners: string[] = [];
        booksList.forEach((item) => {
            geners.push(item.geners);
        });
        res.send(geners);
    }
}
