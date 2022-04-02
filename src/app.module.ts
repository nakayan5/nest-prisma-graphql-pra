import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
// import { PostModule } from './post/post.module';
// import { SignupModule } from './signup/signup.module';
// import { FeedModule } from './feed/feed.module';
// import { PublishController } from './publish/publish.controller';
// import { PublishModule } from './publish/publish.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
