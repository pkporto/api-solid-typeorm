import { getRepository } from "typeorm";
import { Users } from "../../models/Users";
import { IUserRepository } from '../IUserRepository';

export class CreateUserDb implements IUserRepository {
    async findByEmail(email: string): Promise<Users>{
        try {
            
        const expo = await getRepository(Users).findOne(
            { where:
                { email: email }
            });
        // expo.
        console.log(expo);
             return expo!;
        } catch (error) {
            return error.message;
        }
    }

    async save(user: Users): Promise<void>{
        try {
            await getRepository(Users).save(user);
        } catch (error) {
            
        }
    }
}