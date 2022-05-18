import { Request , Response, NextFunction ,Router} from 'express'
import HttpException from '../../utils/exception/http.exception'
import { Controller } from '../../deps'
import HelloWorldService from './helloworld.service'

class HelloWorldController implements Controller {
    public path : string = '/';
    public router : Router = Router();
    private HelloWorldService = new HelloWorldService();
    constructor(  ){
        this.initialRoutes();
    }
    private initialRoutes() : void {
        this.router.get(this.path,this.read);
    }

    private async read(req : Request, res : Response, next : NextFunction):Promise<Response | void> {
        try {
            const result = this.HelloWorldService.read();
            res.status(201).json({
                result
            })

        }
        catch(err : Error|unknown){
            next(new HttpException(400,(<Error>err).message))

        }
       
    }

}

export default HelloWorldController
