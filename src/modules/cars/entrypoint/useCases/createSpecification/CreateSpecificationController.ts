import { Request, Response } from 'express';
import { CreateSpecificationService } from '../../../application/useCases/createSpecification/CreateSpecificationUseCase';

class CreateSpecificationController {

  constructor(private createSpecificationService : CreateSpecificationService) { }

  handle(request: Request , response: Response) {
    const { name, description } = request.body;

    try {
      this.createSpecificationService.execute({ name, description });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
    return response.status(201).send();
  }

}

export { CreateSpecificationController };