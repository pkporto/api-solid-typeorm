import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1615832671706 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        new Table({
            name: 'stuff',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true
              },
              {
                name: 'userId',
                type: 'uuid'
              }
            ]
          })
        ;
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
