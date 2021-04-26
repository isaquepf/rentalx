import { ICreateSpecificationDTO } from "../../application/dtos/ICreateSpecificationDTO";
import { Specification } from "../entities/Specification";

interface ISpecificationRepository {
  create({ description, name} : ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationRepository };