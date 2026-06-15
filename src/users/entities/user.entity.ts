import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('usuarios')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ unique: true })
  email?: string;

  @Column()
  nombre?: string;

  @Column()
  rol?: string; // 'medico', 'paciente', 'administrador'

  @CreateDateColumn()
  createdAt?: Date;
}