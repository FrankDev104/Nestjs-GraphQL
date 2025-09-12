import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class CreateDtoInput{
    
    
@Field(()=> String,{description:'What needs to be done' })
deescription: string;
}