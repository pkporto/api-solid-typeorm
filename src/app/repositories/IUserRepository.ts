import { Users } from "../models/Users";

export interface IUserRepository {
    findByEmail(email: string): Promise<Users>;
    save(user: Users): void;
}