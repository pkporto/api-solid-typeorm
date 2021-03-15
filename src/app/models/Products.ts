import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";

@Entity('Products')
export class Products {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column()
    idRMS!: string;

    @Column()
    ean!: string;

    @Column()
    imagem!: string;

    @Column()
    description!: string;

    @Column()
    price!: number;

    @Column()
    inventory!: number;

    
}