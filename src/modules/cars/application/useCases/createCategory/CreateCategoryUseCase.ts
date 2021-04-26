import { inject, injectable } from "tsyringe";
import ICategoryRepository from "../../../domain/repositories/ICategoryRepository";
import ICreateCategoryDTO from "../../dtos/ICreateCategoryDTO";

/**
 * []. Definir o tipo de retorno.
 * [x]. Alterar o retorno de erro.
 * [x]. Acessar o repositório.
 * []. Retornar algo.
*/
@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoryRepository')
    private _categoryRepository: ICategoryRepository) { }

  execute(category: ICreateCategoryDTO) {
    const categoryAlreadyExists = this._categoryRepository.findByName(category.name);

    if (categoryAlreadyExists)
      throw new Error("Category already exists!");

    this._categoryRepository.create(category);
  }
}

export default CreateCategoryUseCase;