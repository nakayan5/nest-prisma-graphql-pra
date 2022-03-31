import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';

@Module({
  controllers: [SignupController],
})
export class SignupModule {}
