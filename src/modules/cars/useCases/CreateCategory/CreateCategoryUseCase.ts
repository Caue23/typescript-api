import {inject, injectable} from "tsyringe";
import { AppError } from "../../../../errors/appError";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase{
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository){}
        
   async execute({name, description}: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findByname(name);
    
    if(categoryAlreadyExists) {
        throw new AppError("Category already exists");
    }
    
    this.categoriesRepository.create({name, description});

    }
}


export {CreateCategoryUseCase}