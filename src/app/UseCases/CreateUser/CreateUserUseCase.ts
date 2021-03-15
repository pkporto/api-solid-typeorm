import { Users } from '../../models/Users';
import { IUserRepository } from '../../repositories/IUserRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUserRepository
    ){}
    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if(userAlreadyExists){
            throw new Error('User already exists.');
        }

        const user = new Users(data);

        await this.usersRepository.save(user);
        
    }
}