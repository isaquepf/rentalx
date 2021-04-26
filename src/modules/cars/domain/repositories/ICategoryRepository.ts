import ICreateCategoryDTO from "../../application/dtos/ICreateCategoryDTO";
import { Category } from "../entities/Category";


interface ICategoryRepository {

  create({name, description}: ICreateCategoryDTO): void;

  list(): Category[];

  findByName(name: string): Category;
}

export default ICategoryRepository;