import { ICreateSpecificationDTO } from "../../application/dtos/ICreateSpecificationDTO";
import { Specification } from "../../domain/entities/Specification";
import { ISpecificationRepository } from "../../domain/repositories/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((specification) => specification.name === name);
    return specification;
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, { description, name });

    this.specifications.push(specification);
  }
}

export { SpecificationRepository };