import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nhanvien } from './entities/nhanvien.entity/nhanvien.entity';

@Injectable()
export class NhanvienService {
  constructor(
    @InjectRepository(Nhanvien)
    private readonly nhanvienRepo: Repository<Nhanvien>,
   
  ) {}

  findAll() {
    return this.nhanvienRepo.find();
  }

  create(data: Partial<Nhanvien>) {
    return this.nhanvienRepo.save(data);
  }

  findOne(id: number) {
    return this.nhanvienRepo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Nhanvien>) {
    await this.nhanvienRepo.update(id, data);
    return this.findOne(id);
  }

  delete(id: number) {
    return this.nhanvienRepo.delete(id);
  }
}
