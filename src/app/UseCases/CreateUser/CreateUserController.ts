import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}
    async handle(req: Request, res: Response):Promise<Response>{
        const { nome, email, senha, cpf } = req.body;

       try {     
        await this.createUserUseCase.execute({
            nome, 
            email,
            senha,
            cpf
        });

        return res.status(201).send();
       } catch (error) {
           return res.status(400).json({
               message: error.message || "Erro desconhecido."
           })
       }
    }
}