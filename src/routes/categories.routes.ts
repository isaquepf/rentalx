import { Router } from 'express';
import multer from 'multer';
import { container } from 'tsyringe';
import CreateCategoryUseCase from '../modules/cars/application/useCases/createCategory/CreateCategoryUseCase';
import { ImportCategoryUseCase } from '../modules/cars/application/useCases/importCategory/ImportCategoryUseCase';
import ListCategoriesUseCase from '../modules/cars/application/useCases/listCategories/ListCategoriesUseCase';
import { CreateCategoryController } from '../modules/cars/entrypoint/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/entrypoint/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '../modules/cars/entrypoint/useCases/listCategories/ListCategoriesController';

const categoriesRoutes = Router();

var upload = multer({
  dest: "./tmp"
});

categoriesRoutes.post("/", (request, response) => {
  const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

  const controller = new CreateCategoryController(createCategoryUseCase);

  return controller.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

  const controller = new ListCategoriesController(listCategoriesUseCase);

  return controller.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

  const controller = new ImportCategoryController(importCategoryUseCase);

  return controller.handle(request, response);  
});

export { categoriesRoutes };