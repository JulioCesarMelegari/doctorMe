import DoctorController from "@/application/DoctorController/DoctorController";
import ListDoctorUseCase from "@/application/useCases/doctor/ListDoctors";
import { Request, Response } from "express";
import { dataBase } from "../DatabaseService";


export default class DoctorControllerImpl implements DoctorController{
    async listDoctor(req: Request, res: Response){
        const useCase = new ListDoctorUseCase(dataBase);
        const doctors = await useCase.execute();

        res.status(200).json(doctors);
    }

}
