import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  crearUsuario(@Body() datos: { nombre: string; email: string; rol: string }) {
    return this.usersService.create(datos);
  }

  @Get()
  obtenerTodos() {
    return this.usersService.findAll();
  }

  @Get(':id')
  obtenerUno(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
}