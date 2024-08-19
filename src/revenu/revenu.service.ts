import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Revenu } from './revenu.entity';
import { CreateRevenuDto } from './dto/createRevenuDto';
import { UpdateRevenuDto } from './dto/updateRevenuDto'; 

@Injectable()
export class RevenuService {
  constructor(
    @InjectRepository(Revenu)
    private readonly revenuRepository: Repository<Revenu>,
  ) {}

  async findAll(): Promise<Revenu[]> {
    return this.revenuRepository.find();
  }

  async findOne(id: number): Promise<Revenu> {
    return this.revenuRepository.findOneBy({ id });
  }

  async create(createRevenuDto: CreateRevenuDto): Promise<Revenu> {
    const revenu = this.revenuRepository.create(createRevenuDto);
    return this.revenuRepository.save(revenu);
  }

  async update(id: number, updateRevenuDto: UpdateRevenuDto): Promise<Revenu> {
    await this.revenuRepository.update(id, updateRevenuDto);
    return this.revenuRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.revenuRepository.delete(id);
  }
}
