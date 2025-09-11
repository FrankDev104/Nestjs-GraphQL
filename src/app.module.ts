import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { HellowordModule } from './helloword/helloword.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground:false,
    plugins:[
      ApolloServerPluginLandingPageLocalDefault()
    ],
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }), HellowordModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
