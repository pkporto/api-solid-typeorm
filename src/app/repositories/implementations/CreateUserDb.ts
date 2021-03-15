import { getRepository } from "typeorm";
import { User } from "../../models/User";
import { IUserRepository } from '../IUserRepository';

export class CreateUserDb implements IUserRepository {
    async findByEmail(email: string): Promise<User>{
        try {
            
        const expo = await getRepository(User).findOne(
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

    async save(user: User): Promise<void>{
        try {
            await getRepository(User).save(user);
        } catch (error) {
            
        }
    }
}