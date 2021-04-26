import ICreateCategoryDTO from "../../application/dtos/ICreateCategoryDTO";
import { Category } from "../../domain/entities/Category";
import ICategoryRepository from "../../domain/repositories/ICategoryRepository";


class CategotegoryRepository implements ICategoryRepository {
    private categories: Category[];

    constructor() {
      this.categories = [];
    }

    create({name, description}: ICreateCategoryDTO): void {
      const category = new Category();

      Object.assign(category, {name, description});

      this.categories.push(category);
    }

    list(): Category[] {
      return this.categories;
    }

    findByName(name: string): Category {
      const category = this.categories.find((category) => category.name === name);
      return category;
    }
}

export default CategotegoryRepository;