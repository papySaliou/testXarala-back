import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Depense } from './depense.entity';
import { CreateDepenseDto } from './dto/createDepenseDto';
import { UpdateDepenseDto } from './dto/updateDepenseDto';

@Injectable()
export class DepenseService {
  constructor(
    @InjectRepository(Depense)
    private readonly depenseRepository: Repository<Depense>,
  ) {}

  async findAll(): Promise<Depense[]> {
    return this.depenseRepository.find();
  }

  async findOne(id: number): Promise<Depense> {
    return this.depenseRepository.findOneBy({ id });
  }

  async create(createDepenseDto: CreateDepenseDto): Promise<Depense> {
    const depense = this.depenseRepository.create(createDepenseDto);
    return this.depenseRepository.save(depense);
  }

  async update(id: number, updateDepenseDto: UpdateDepenseDto): Promise<Depense> {
    await this.depenseRepository.update(id, updateDepenseDto);
    return this.depenseRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.depenseRepository.delete(id);
  }
}
