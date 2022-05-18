import express, { Application } from 'express';
import AppDataSource from './db/db'
import { Controller} from './deps'

class App {
    public app : Application = express();
    public port : number = 8080;

    constructor(private controllers : Array<Controller>,port : number){
        this.app = this.app;
        this.port = port;

        this.initializeMiddleware();
        this.initializeControllers(controllers);

    }

    private async initializeMiddleware(){
        this.app.use(express.json());

        try {
            await AppDataSource.initialize();
            console.log("Connect Database Successfully !")

        }catch(err : unknown){
            console.log("Connect Databse Error" + (err as Error).message)
        }
    }

    private initializeControllers(controllers : Array<Controller>) {
        controllers.forEach((controller)=>{
            this.app.use('/api',controller.router)
        });
    }

    public listen () {
        this.app.listen(this.port,()=> {
            console.log(`App listening on the port ${this.port}`)
        });
    }

}
export default App
