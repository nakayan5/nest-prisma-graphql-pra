import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PostController } from './post.controller';

@Module({
  controllers: [PostController],
  providers: [PrismaService],
})
export class PostModule {}
