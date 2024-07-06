import DatabaseService from "@/infra/DatabaseService";

export default class GetDoctorByIdUseCase{
    constructor(readonly database: DatabaseService){}

    async execute(id: number){

        const INCLUDE_AGENDA = true;
        const doctor = await this.database.GetDoctorById(
            id,
            INCLUDE_AGENDA
        );

        if(!doctor){
            throw new Error('No doctor Found');
        }
        return doctor;
    }
}