import { Router } from 'express';
import { container } from 'tsyringe';
import { CreateSpecificationService } from '../modules/cars/application/useCases/createSpecification/CreateSpecificationUseCase';
import { CreateSpecificationController } from '../modules/cars/entrypoint/useCases/createSpecification/CreateSpecificationController';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  const createSpecificationService = container.resolve(CreateSpecificationService);
  
  const controller = new CreateSpecificationController(createSpecificationService);

  return controller.handle(request, response);
});

export { specificationRoutes };