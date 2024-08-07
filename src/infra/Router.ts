import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import helmet from 'helmet'
import DoctorController from '@/application/DoctorController/DoctorController';

export default class Router {
    app: express.Express;

    constructor(
        readonly doctorController: DoctorController
    ){
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
        });

        this.app.get('/doctors', this.doctorController.listDoctor);
    }

    public start(port: number){
        this.app.listen(port, () => {
            console.log(`Server runnin on port ${port}`);
        });
    }
}