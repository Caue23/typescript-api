import { ICreateUsersDto } from "../dtos/ICreateUsersDto";
import { User } from "../entities/user";



interface IUsersRepository{
    create(data: ICreateUsersDto): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;

}

export{IUsersRepository}