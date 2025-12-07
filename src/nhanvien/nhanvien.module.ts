import { Module } from '@nestjs/common';
import { NhanvienController } from './nhanvien.controller';
import { NhanvienService } from './nhanvien.service';

import { TypeOrmModule } from '@nestjs/typeorm'; // 👈 B1: Import TypeOrmModule
import { Nhanvien } from './entities/nhanvien.entity/nhanvien.entity'; // 👈 B2: Import Entity

@Module({
  imports: [
    // (3) TypeOrmModule.forFeature() PHẢI CHỨA Entity
    TypeOrmModule.forFeature([Nhanvien]), 
  ],
  controllers: [NhanvienController],
  providers: [NhanvienService]
})
export class NhanvienModule {}
