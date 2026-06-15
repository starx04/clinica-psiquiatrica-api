import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module'; // Ojo que la ruta apunte bien aquí
import { HistorialModule } from './historial/historial.module';

@Module({
  imports: [
    // 1. SIEMPRE PRIMERO la conexión global de TypeORM

      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'user_clinica',          // El usuario creado por SQL
        password: 'Cl1n1c4_P51q_2026',     // La contraseña configurada
        database: 'clinica_psiquiatrica',
        autoLoadEntities: true,
        synchronize: false,                // Mantenlo en false ya que el script controló la estructura
      }),


    // 2. Conexión global de Mongo
    MongooseModule.forRoot('mongodb://localhost:27017/clinica_psiquiatrica'),

    // 3. Al final tus módulos de lógica de negocio
    UsersModule,
    HistorialModule,
  ],
})
export class AppModule { }