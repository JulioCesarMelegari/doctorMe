import { PrismaClient } from "@prisma/client";

export default class DatabaseService{
    constructor(readonly connection: PrismaClient){}

    listDoctor(){
        return this.connection.doctor.findMany();
    }
}

export const dataBase = new DatabaseService(new PrismaClient());