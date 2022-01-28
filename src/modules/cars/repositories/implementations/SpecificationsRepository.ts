import{ ISpecificationsRepository, ICreateSpecificationDTO} from "../IspecificatiosRepository";
import { Specification} from "../../entities/specification";


class SpecificationsRepository implements ISpecificationsRepository{
    private Specifications: Specification[];

    constructor(){
        this.Specifications = [];
    }


    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification();
       Object.assign(specification,{
            name,
            description,
            created_at: new Date(),
        });
        this.Specifications.push(specification);
    }
    findByname(name: string) {
        const specification = this.Specifications.find(specification =>specification.name === name);
        return specification;
    }

}

export { SpecificationsRepository};