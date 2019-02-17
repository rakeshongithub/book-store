export default class Controller {
    getBooksList(req:any, res:any): void {
        res.send([
            {
                'name': 'Book One',
                'author': 'Rakesh Kumar'
            }
        ])
    }
}