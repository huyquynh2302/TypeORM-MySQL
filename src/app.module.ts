import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import config from './database/ormconfig'
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule,GraphQLModule.forRoot({
    autoSchemaFile: true,
    introspection: true,
    playground: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
