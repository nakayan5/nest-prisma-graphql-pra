import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User as UserModel, Prisma } from '@prisma/client';

@Controller('/signup')
export class SignupController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async signupUser(
    @Body()
    userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    console.log('userData ---------------------', userData);

    return this.prismaService.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        posts: userData.posts,
      },
    });
  }
}
