import fs from 'fs';
import csvParse from "csv-parse";
import ICategoryRepository from '../../../domain/repositories/ICategoryRepository';
import { inject, injectable } from 'tsyringe';
import ICreateCategoryDTO from '../../dtos/ICreateCategoryDTO';

@injectable()
class ImportCategoryUseCase {

  constructor(
    @inject('CategoryRepository')
    private _categoryRepository: ICategoryRepository) { }

  async loadCategories(file: Express.Multer.File): Promise<ICreateCategoryDTO[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const parseFile = csvParse();
      const categories: ICreateCategoryDTO[] = [];

      stream.pipe(parseFile);

      parseFile.on('data', async (line) => {
        const [name, description] = line;
        categories.push({ name, description });
      })
      .on('end', () => { 
        fs.promises.unlink(file.path);
        resolve(categories);
      })
      .on('error', (error) => reject(error));
    });
  }


  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const existCategory = this._categoryRepository.findByName(name);

      if (!existCategory)
        this._categoryRepository.create({name, description});

    })
    
  }
}



export { ImportCategoryUseCase };