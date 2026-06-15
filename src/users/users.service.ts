import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>, // Inyecta el repositorio de Postgres
  ) {}

  async create(datosUsuario: Partial<User>): Promise<User> {
    const nuevoUsuario = this.usersRepository.create(datosUsuario);
    return await this.usersRepository.save(nuevoUsuario);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<User | null> {
  return await this.usersRepository.findOneBy({ id });
}
}