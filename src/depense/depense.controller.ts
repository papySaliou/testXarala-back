import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DepenseService } from './depense.service';
import { CreateDepenseDto } from './dto/createDepenseDto';
import { UpdateDepenseDto } from './dto/updateDepenseDto';

@Controller('depenses')
export class DepenseController {
  constructor(private readonly depenseService: DepenseService) {}

  @Get()
  async findAll() {
    return this.depenseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.depenseService.findOne(id);
  }

  @Post()
  async create(@Body() createDepenseDto: CreateDepenseDto) {
    return this.depenseService.create(createDepenseDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateDepenseDto: UpdateDepenseDto) {
    return this.depenseService.update(id, updateDepenseDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.depenseService.remove(id);
  }
}
