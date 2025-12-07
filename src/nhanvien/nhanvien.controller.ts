import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Render,
  Redirect,
} from '@nestjs/common';
import { NhanvienService } from './nhanvien.service';

@Controller('nhanvien')
export class NhanvienController {
  constructor(private readonly nhanvienService: NhanvienService) {}

  @Get()
  @Render('index')
  async index() {
    const nhanvien = await this.nhanvienService.findAll();
    return { nhanvien };
  }

  @Get('add')
  @Render('add')
  addForm() {
    return {};
  }

  @Post('add')
  @Redirect('/nhanvien')
  async create(@Body() body) {
    await this.nhanvienService.create(body);
    return {};
  }

  @Get('edit/:id')
  @Render('edit')
  async editForm(@Param('id') id: number) {
    const nhanvien = await this.nhanvienService.findOne(id);
    return { nhanvien };
  }

  @Post('edit/:id')
  @Redirect('/nhanvien')
  async update(@Param('id') id: number, @Body() body) {
    await this.nhanvienService.update(id, body);
    return {};
  }

  @Get('delete/:id')
  @Redirect('/nhanvien')
  async delete(@Param('id') id: number) {
    await this.nhanvienService.delete(id);
    return {};
  }
}
