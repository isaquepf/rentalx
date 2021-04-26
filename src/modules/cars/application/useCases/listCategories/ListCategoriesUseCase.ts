import { inject, injectable } from "tsyringe";
import { Category } from "../../../domain/entities/Category";
import ICategoryRepository from "../../../domain/repositories/ICategoryRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoryRepository')
    private _categoryRepository: ICategoryRepository) { }

  execute(): Category[] {
    return this._categoryRepository.list()
  }
}

export default ListCategoriesUseCase;