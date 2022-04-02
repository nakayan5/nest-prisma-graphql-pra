import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    // private readonly prismaService: PrismaService,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
