import{ ISpecificationsRepository, ICreateSpecificationDTO} from "../IspecificatiosRepository";
import { Specification} from "../../entities/specification";
import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";


class SpecificationsRepository implements ISpecificationsRepository{
    private repository: Repository<Specification>


    constructor(){
        this.repository = getRepository(Specification)
    }


    async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            description, 
            name,
        });

        await this.repository.save(specification);
    }
    async findByname(name: string): Promise<Specification> {
        const specification = this.repository.findOne({ 
            name
         });
        return specification;
    }

}

export { SpecificationsRepository};