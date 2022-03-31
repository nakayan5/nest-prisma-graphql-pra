import { Controller, Param, Put } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Post as PostModel } from '@prisma/client';

@Controller('publish')
export class PublishController {
  constructor(private readonly prismaService: PrismaService) {}

  @Put('publish/:id')
  async togglePublishPost(@Param('id') id: string): Promise<PostModel> {
    const postData = await this.prismaService.post.findUnique({
      where: { id: Number(id) },
      select: {
        published: true,
      },
    });

    return this.prismaService.post.update({
      where: { id: Number(id) || undefined },
      data: { published: !postData?.published },
    });
  }
}
