import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";
import {Request, Response} from "express";



class AuthenticateUserController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {password, email} = request.body;

        const authenticationUserUseCase = container.resolve(AuthenticateUserUseCase);

        const token = await authenticationUserUseCase.execute({
            email,
            password
        });

        return response.json(token);
    }
}

export {AuthenticateUserController};