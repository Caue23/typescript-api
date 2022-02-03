import{inject, injectable} from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

import {compare} from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";

interface IRequest{

    email: string;
    password: string;
}

interface IResponse{
    user: {
        name: string,
        email: string
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({email, password}: IRequest): Promise<IResponse> {
        // usuario existe
        const user = await this.usersRepository.findByEmail(email);

        if(!user) {
            throw new AppError("Email or password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        //senha esta correta
        if(!passwordMatch) {
            throw new AppError("Email or password incorrect");
        }

        const token = sign({}, "f1af87228b5df272021f2a9afba40198", {
            subject: user.id,
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            },
        }
        return tokenReturn;

    }




}

export { AuthenticateUserUseCase}