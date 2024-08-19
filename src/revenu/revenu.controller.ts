import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RevenuService } from './revenu.service';
import { CreateRevenuDto } from './dto/createRevenuDto';
import { UpdateRevenuDto } from './dto/updateRevenuDto';

@Controller('revenu')
export class RevenuController {
        constructor(private readonly revenuService: RevenuService) {}
      
        @Get()
        async findAll() {
          return this.revenuService.findAll();
        }
      
        @Get(':id')
        async findOne(@Param('id') id: number) {
          return this.revenuService.findOne(id);
        }
      
        @Post()
        async create(@Body() CreateRevenuDto: CreateRevenuDto) {
          return this.revenuService.create(CreateRevenuDto);
        }
      
        @Put(':id')
        async update(@Param('id') id: number, @Body() updateRevenuDto: UpdateRevenuDto) {
          return this.revenuService.update(id, updateRevenuDto);
        }
      
        @Delete(':id')
        async remove(@Param('id') id: number) {
          return this.revenuService.remove(id);
        }
      
}
