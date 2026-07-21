import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class PromptsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.promptTemplate.findMany({ orderBy: { id: 'asc' } });
  }

  findOne(id: number) {
    return this.prisma.promptTemplate.findUnique({ where: { id } });
  }

  findBySlug(slug: string) {
    return this.prisma.promptTemplate.findUnique({ where: { slug } });
  }

  create(data: { name: string; slug: string; content: string; description?: string; category?: string }) {
    return this.prisma.promptTemplate.create({ data });
  }

  update(id: number, data: { name?: string; content?: string; description?: string }) {
    return this.prisma.promptTemplate.update({ where: { id }, data });
  }
}
