import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SignupController],
  providers: [PrismaService],
})
export class SignupModule {}
