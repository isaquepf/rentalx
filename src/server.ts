import 'reflect-metadata';

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger.json';
import './modules/cars/infra/ioc/container';
import { routes } from './routes';

import "./infraestructure/database";

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.listen(3333, () => console.log('Server is running!'));
