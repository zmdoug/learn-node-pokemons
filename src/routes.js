import { Router } from 'express';
import UserController from '../app/controllers/users';
import SessionController from '../app/controllers/session';
import authMiddlewares from '../app/middlewares/auth'
const routes = new Router();

routes.post('/users', UserController.create);
routes.post('/auth', SessionController.auth);

routes.use(authMiddlewares);
/* routes that need authentication */
routes.put('/users', UserController.update);

export default routes;