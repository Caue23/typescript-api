import {ISpecificationsRepository} from "../../repositories/IspecificatiosRepository";

interface IRequest {
    name: string;
    description: string;
};

class CreateSpecificationUseCase{
    constructor(private specificationRepository: ISpecificationsRepository){}
    execute({name,description}:IRequest): void{
        const specificationAlready = this.specificationRepository.findByname(name);

        if (specificationAlready){
            throw new Error("Specification already Exist!");
        }
        this.specificationRepository.create({
            name,
            description,
        });
    }

}

export { CreateSpecificationUseCase};