import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    name: 'default',
    type: 'mysql',
    database: 'typeorm',
    host: 'localhost',
    username: 'root',
    password: '0981478273',
    port: +'3306',
    //entities: ['dist/common/entities/**/*.js'],
    entities: [__dirname + '/../../**/entities/*.js'],
    synchronize: true,
    cli: {
        entitiesDir: 'src/common/entities',
    },
}

export default config;