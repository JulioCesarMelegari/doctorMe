import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

export default class Router {
    app: express.Express;

    constructor(){
        this.app = express();
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json());

        this.setRoutes();
    }

    private setRoutes(){
        //rotas
        this.app.get('/', (req, res) =>{
            res.send('Rota de teste');
        })
    }

    public start(port: number){
        this.app.listen(port, () => {
            console.log(`Server runnin on port ${port}`);
        });
    }
}