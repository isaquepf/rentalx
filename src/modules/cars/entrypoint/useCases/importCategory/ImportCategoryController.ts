import { Request, Response } from 'express';
import { ImportCategoryUseCase } from '../../../application/useCases/importCategory/ImportCategoryUseCase';

class ImportCategoryController {

  constructor(private _uc: ImportCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;
    this._uc.execute(file);
    return response.send();
  }
}

export { ImportCategoryController };