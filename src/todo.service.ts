import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TODO, Prisma } from '@prisma/client';

@Injectable()
export class TODOService {
  constructor(private prisma: PrismaService) {}

  async todo(
    todoWhereUniqueInput: Prisma.TODOWhereUniqueInput,
  ): Promise<TODO | null> {
    return this.prisma.TODO.findUnique({
      where: todoWhereUniqueInput,
    });
  }

  async findTODO(id: number): Promise<TODO | null> {
    return this.prisma.TODO.findUnique({
      where: { id },
    });
  }

  async allTODO(): Promise<TODO[]> {
    return this.prisma.TODO.findMany();
  }

  async updateTODO(params: {
    data: Prisma.TODOUpdateInput;
    where: Prisma.TODOWhereUniqueInput;
  }): Promise<TODO> {
    const { data, where } = params;
    return this.prisma.TODO.update({
      data,
      where,
    });
  }

  async createTODO(data: Prisma.TODOCreateInput): Promise<TODO> {
    return this.prisma.TODO.create({
      data,
    });
  }

  async deleteTODO(where: Prisma.TODOWhereUniqueInput): Promise<TODO> {
    return this.prisma.TODO.delete({
      where,
    });
  }
}
