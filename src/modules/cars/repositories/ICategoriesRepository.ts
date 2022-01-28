    import { Category } from "../entities/Category";

interface ICreateCategoryDto{
    name: string;
    description: string;
}

interface ICategoriesRepository{
    findByname(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({name,description}: ICreateCategoryDto): Promise<void>;

}

export {ICategoriesRepository, ICreateCategoryDto};