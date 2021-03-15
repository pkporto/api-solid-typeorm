import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProductsTable1615831303940 implements MigrationInterface {
    name = 'CreateProductsTable1615831303940'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Products" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "idRMS" character varying NOT NULL, "ean" character varying NOT NULL, "imagem" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, "inventory" integer NOT NULL, CONSTRAINT "PK_36a07cc432789830e7fb7b58a83" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Products"`);
    }

}
