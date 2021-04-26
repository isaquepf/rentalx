import { container } from 'tsyringe';
import ICategoryRepository from '../../domain/repositories/ICategoryRepository';
import { ISpecificationRepository } from '../../domain/repositories/ISpecificationRepository';
import CategoryRepository from '../repositories/CategoryRepository';

import { SpecificationRepository } from '../repositories/SpecificationRepository';

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  CategoryRepository,
);

container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
   SpecificationRepository,
);