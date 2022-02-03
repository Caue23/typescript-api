import{inject, injectable} from "tsyringe";
import { hash } from "bcryptjs";
import { ICreateUsersDto } from "../../dtos/ICreateUsersDto";

import { IUsersRepository } from "../../repositories/IUsersRepository";



@injectable()
class CreateUserUseCase{

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async excute({name, password,email,driver_license}: ICreateUsersDto): Promise<void>{

        const UsersAlreadyExist = await this.usersRepository.findByEmail(email);

        if(UsersAlreadyExist){
            throw new Error("User Already Exist");
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name, 
            password: passwordHash,
            email,
            driver_license

        });

    }
    
    


}

export {CreateUserUseCase}