import {Router} from 'express';
import { createUserController } from './app/UseCases/CreateUser/union';
const router = Router();

 router.post('/signUp',  (req,res)=>{
     console.log('entrou');
     return createUserController.handle(req, res);
 });

export default router;