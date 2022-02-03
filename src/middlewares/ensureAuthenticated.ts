import { NextFunction,Request,Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPlayload{
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if(!authHeader) {
        throw new AppError("token missing, 401");
    }

    const [, token] = authHeader.split(" ");

    try {
       const {sub: user_id} = verify(token, "f1af87228b5df272021f2a9afba40198")as IPlayload;

       const usersRepository = new UsersRepository();
       const user = await usersRepository.findById(user_id);

       if(!user) {
           throw new AppError("User does not exist, 401");
       }
      
      
       next();

       request.user = {
           id: user_id
       }

    }
     catch{
        throw new AppError("invalid token, 401");
    }
}