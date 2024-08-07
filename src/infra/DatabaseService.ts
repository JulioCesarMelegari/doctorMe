import { PrismaClient } from "@prisma/client";

export default class DatabaseService{
    constructor(readonly connection: PrismaClient){}

    listDoctor(){
        return this.connection.doctor.findMany();
    }

    GetDoctorById(id:number, includeAgenda:boolean){
        return this.connection.doctor.findUnique({
            where:{ id },
            include:{
                agenda: includeAgenda
            }
        });
    }

    getPatientByPhone(phone: string, includeAppointment:boolean){
        return this.connection.patient.findUnique({
            where: { phone},
            include:{
                appointment: includeAppointment,
            },
        })
    }
}



export const dataBase = new DatabaseService(new PrismaClient());