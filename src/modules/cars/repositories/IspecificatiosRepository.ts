
interface ICreateSpecificationDTO{
    name: string;
    description: string;
}

interface ISpecificationsRepository{
    create({description,name}: ICreateSpecificationDTO): void;
    findByname(name: string)

}

export { ISpecificationsRepository, ICreateSpecificationDTO};