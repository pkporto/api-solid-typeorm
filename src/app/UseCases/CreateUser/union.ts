import { CreateUserDb } from "../../repositories/implementations/CreateUserDb";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const createUserDb = new CreateUserDb();
const createUserUseCase = new CreateUserUseCase(
    createUserDb
);

const createUserController = new CreateUserController(
    createUserUseCase
);


export { createUserController }