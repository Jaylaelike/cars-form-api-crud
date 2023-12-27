import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class License {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  Section: string;

  @Column({ default: null })
  Car: string;

  @Column({ default: null })
  ต้นทาง: string;

  @Column({ default: null })
  ปลายทาง: string;

  @Column({ default: null })
  รายละเอียดการใช้งาน: string;

  @Column({ default: null })
  ผู้ใช้รถ: string;

  @Column({ default: null })
  Status: string;
}
