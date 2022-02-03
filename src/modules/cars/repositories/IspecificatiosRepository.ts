import { Specification } from "../entities/specification";

interface ICreateSpecificationDTO{
    name: string;
    description: string;
}

interface ISpecificationsRepository{
    create({description,name}: ICreateSpecificationDTO): Promise<void>;
    findByname(name: string): Promise<Specification>;

}

export { ISpecificationsRepository, ICreateSpecificationDTO};