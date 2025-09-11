import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { HellowordModule } from './helloword/helloword.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    //playground:false,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }), HellowordModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
