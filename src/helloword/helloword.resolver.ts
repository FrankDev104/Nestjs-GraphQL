import { Float, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HellowordResolver {

    @Query(() => String, { description: 'hola mundo es lo que retorna', name: 'hello' })
    helloworld(): string {
        return 'hola mundo '
    }

@Query(()=> Float, { name: 'randomnombre'})
getRandomNumber(): number {
    return Math.random() *100;
}






}
