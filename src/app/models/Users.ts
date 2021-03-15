import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import { uuid } from 'uuidv4';
import bcrypt from 'bcrypt';


@Entity('Users')
export class Users {

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

    constructor(props: Omit<Users, 'id'>, id?: string){
        Object.assign(this, props);

        if(!id){
            this.id = uuid();
        }
    }

    // @BeforeInsert()
    // @BeforeUpdate()
    // hashPassword(){
    //     this.senha = bcrypt.hashSync(this.hashPassword, 8 );
    // }

}