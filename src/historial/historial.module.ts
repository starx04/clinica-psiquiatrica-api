import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HistorialService } from './historial.service';
import { HistorialController } from './historial.controller';
import { Historial, HistorialSchema } from './schemas/historial.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Historial.name, schema: HistorialSchema }]), // Registra la colección de Mongo
  ],
  controllers: [HistorialController],
  providers: [HistorialService],
})
export class HistorialModule {}