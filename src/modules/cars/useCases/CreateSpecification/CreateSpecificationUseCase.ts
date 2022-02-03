import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/appError";

import {ISpecificationsRepository} from "../../repositories/IspecificatiosRepository";

interface IRequest {
    name: string;
    description: string;
};
@injectable()
class CreateSpecificationUseCase{
    constructor(
        @inject("SpecificationsRepository")
        private specificationRepository: ISpecificationsRepository){}
    async execute({name,description}:IRequest): Promise<void>{
        const specificationAlready = await this.specificationRepository.findByname(name);

        if (specificationAlready){
            throw new AppError("Specification already Exist!");
        }
        await this.specificationRepository.create({
            name,
            description,
        });
    }

}

export { CreateSpecificationUseCase};