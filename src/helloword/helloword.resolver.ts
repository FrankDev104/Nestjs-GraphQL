import { Float, Int, Query, Resolver } from '@nestjs/graphql';
import { max } from 'rxjs';

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
@Query(() => Int, {name: 'randomFromZeroTo'})
getRandomFromZeroTo(): number{
    return Math.floor( Math.random() * 10);
}






}
