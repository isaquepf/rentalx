import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../../domain/repositories/ISpecificationRepository";
import { ICreateSpecificationDTO } from "../../dtos/ICreateSpecificationDTO";

@injectable()
 class CreateSpecificationService {
  constructor(
    @inject('SpecificationRepository')
    private _specificationRepository:  ISpecificationRepository) { }

  execute(specification: ICreateSpecificationDTO): void {
    const specificationAlreadyExists = this._specificationRepository.findByName(specification.name);

    if (specificationAlreadyExists)
      throw new Error("Specification already exists!");

    this._specificationRepository.create(specification);
  }
}

export { CreateSpecificationService };