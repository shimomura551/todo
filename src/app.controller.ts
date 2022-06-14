import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TODOService } from './todo.service';
import { TODO, TODO as TODOModel } from '@prisma/client';
import { identity } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly TODOService: TODOService,
  ) {}

  @Get('get')
  async allTODO(): Promise<TODO[]> {
    return this.TODOService.allTODO();
  }

  @Get('get/:id')
  async findUserById(@Param('id') id: string): Promise<TODO> {
    return this.TODOService.findTODO(Number(id));
  }

  @Put('put/:id')
  update(
    @Param('id') id: string,
    @Body() data: { title?: string; body: string },
  ): Promise<TODOModel> {
    return this.TODOService.updateTODO({
      where: { id: Number(id) },
      data: data,
    });
  }

  @Post('post')
  async createTodo(
    @Body() todoData: { title?: string; body: string },
  ): Promise<TODOModel> {
    return this.TODOService.createTODO(todoData);
  }

  @Delete('delete/:id')
  async deletePost(@Param('id') id: string): Promise<TODO> {
    return this.TODOService.deleteTODO({ id: Number(id) });
  }
}
