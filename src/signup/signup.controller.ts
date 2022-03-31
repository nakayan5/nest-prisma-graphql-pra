import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User as UserModel, Prisma } from '@prisma/client';

@Controller('signup')
export class SignupController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async signupUser(
    @Body()
    userData: {
      name?: string;
      email: string;
      posts?: Prisma.PostCreateInput[];
    },
  ): Promise<UserModel> {
    const postData = userData.posts?.map((post) => {
      return { title: post?.title, content: post?.content };
    });

    return this.prismaService.user.create({
      data: {
        name: userData?.name,
        email: userData.email,
        posts: {
          create: postData,
        },
      },
    });
  }
}
