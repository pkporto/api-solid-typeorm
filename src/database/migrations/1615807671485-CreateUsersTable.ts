import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsersTable1615807671485 implements MigrationInterface {
    name = 'CreateUsersTable1615807671485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `User` (`id` varchar(36) NOT NULL, `nome` varchar(255) NOT NULL, `cpf` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `senha` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `User`");
    }

}
