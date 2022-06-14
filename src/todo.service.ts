import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TODO, Prisma } from '@prisma/client';

@Injectable()
export class TODOService {
  constructor(private prisma: PrismaService) {}

  async todo(
    todoWhereUniqueInput: Prisma.TODOWhereUniqueInput,
  ): Promise<TODO | null> {
    return this.prisma.tODO.findUnique({
      where: todoWhereUniqueInput,
    });
  }

  async findTODO(id: number): Promise<TODO | null> {
    return this.prisma.tODO.findUnique({
      where: { id },
    });
  }

  async allTODO(): Promise<TODO[]> {
    return this.prisma.tODO.findMany();
  }

  async updateTODO(params: {
    data: Prisma.TODOUpdateInput;
    where: Prisma.TODOWhereUniqueInput;
  }): Promise<TODO> {
    const { data, where } = params;
    return this.prisma.tODO.update({
      data,
      where,
    });
  }

  async createTODO(data: Prisma.TODOCreateInput): Promise<TODO> {
    return this.prisma.tODO.create({
      data,
    });
  }

  async deleteTODO(where: Prisma.TODOWhereUniqueInput): Promise<TODO> {
    return this.prisma.tODO.delete({
      where,
    });
  }
}
