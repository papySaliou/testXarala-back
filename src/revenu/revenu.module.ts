import { Module } from '@nestjs/common';
import { RevenuService } from './revenu.service';
import { RevenuController } from './revenu.controller';
import { Revenu } from './revenu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Revenu])],
  providers: [RevenuService],
  controllers: [RevenuController],
  exports: [RevenuService],
})
export class RevenuModule {}
