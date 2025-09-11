import {  Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HellowordResolver {

@Query(() => String) 
helloworld(): string{
    return 'hola mundo '
}






}
