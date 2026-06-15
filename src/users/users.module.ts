import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity'; // Verifica que la ruta apunte a tu entidad corregida

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // <-- ESTA LÍNEA ES LA QUE FALTA O SE BORRÓ
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}