import { getRepository, Repository } from "typeorm";
import { ICreateUsersDto } from "../../dtos/ICreateUsersDto";
import { User } from "../../entities/user";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepository implements IUsersRepository{
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }


    async create({name, email, password,driver_license, avatar, id}: ICreateUsersDto): Promise<void> {

        const user = this.repository.create({
            name,
            email, 
            password,
            driver_license,
            avatar,
            id,

            
        });
        
        await this.repository.save(user);

    };
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({email});

        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);

        return user;
    }


}

export { UsersRepository }