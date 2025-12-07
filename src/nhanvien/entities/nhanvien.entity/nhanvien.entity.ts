import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Nhanvien {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hoten: string;

  @Column()
  ngaysinh: string;

  @Column()
  khu: string;  

  @Column()
  email: string;

  @Column()
  quequan: string;
}
