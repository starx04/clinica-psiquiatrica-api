import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Historial } from './schemas/historial.schema';

@Injectable()
export class HistorialService {
  constructor(
    @InjectModel(Historial.name) 
    private historialModel: Model<Historial>, // Inyecta el modelo de Mongoose
  ) {}

  async create(datosHistorial: any): Promise<Historial> {
    const nuevoHistorial = new this.historialModel(datosHistorial);
    return await nuevoHistorial.save();
  }

  async findByPaciente(pacienteId: string): Promise<Historial[]> {
    return await this.historialModel.find({ pacienteId }).exec();
  }
}