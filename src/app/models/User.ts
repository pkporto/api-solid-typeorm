import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { uuid } from 'uuidv4';

@Entity('User')
export class User {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    nome!: string;
    
    @Column()
    cpf!: string;

    @Column()
    email!: string;

    @Column()
    senha!: string;

    constructor(props: Omit<User, 'id'>, id?: string){
        Object.assign(this, props);

        if(!id){
            this.id = uuid();
        }
    }
}