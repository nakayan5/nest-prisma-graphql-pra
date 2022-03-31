import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CoModule } from './signup/co/co.module';
import { SignupModule } from './signup/signup.module';
import { FeedModule } from './feed/feed.module';
import { PublishController } from './publish/publish.controller';
import { PublishModule } from './publish/publish.module';

@Module({
  imports: [UserModule, PostModule, CoModule, SignupModule, FeedModule, PublishModule],
  controllers: [AppController, PublishController],
  providers: [PrismaService],
})
export class AppModule {}
