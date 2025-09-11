import { Module } from '@nestjs/common';
import { HellowordResolver } from './helloword.resolver';

@Module({
  providers: [HellowordResolver]
})
export class HellowordModule {}
