import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Carsform {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  เลขทะเบียนรถ: string;
  @Column({ default: null })
  วันที่เดินทางไป: string;
  @Column({ default: null })
  วันที่เดินทางกลับ: string;
  @Column({ default: null })
  รายละเอียดของงาน: string;
  @Column({ default: null })
  สถานที่ต้นทาง: string;
  @Column({ default: null })
  สถานที่ปลายทาง: string;
  @Column({ default: null })
  เลขไมค์ไป: number;
  @Column({ default: null })
  เลขไมค์กลับ: number;
  @Column({ default: null })
  เลขไมค์ระยะรวม: number;

  @Column({ default: null })
  เลขไมล์เติมน้ำมัน: number;

  @Column('decimal', { precision: 10, scale: 2, default: null })
  การเติมน้ำมันจำนวน: number;
  @Column('decimal', { precision: 10, scale: 2, default: null })
  การเติมน้ำมันราคา: number;

  @Column({ default: null })
  การเติมน้ำมันสถานีบริการ: string;
  @Column({ default: null })
  การเติมน้ำมันจังหวัด: string;
  @Column({ default: null })
  ผู้ใช้รถ: string;
  @Column({ default: null })
  ผู้ขับรถ: string;
  @Column({ default: null })
  Status: string;
}
