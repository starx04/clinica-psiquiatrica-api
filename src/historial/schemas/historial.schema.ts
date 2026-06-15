import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'historiales_clinicos' })
export class Historial extends Document {
  @Prop({ required: true })
  pacienteId?: string; // ID relacional que viene de Postgres

  @Prop({ required: true })
  medicoId?: string;   // ID relacional que viene de Postgres

  @Prop({ required: true })
  diagnostico?: string;

  @Prop([String])
  sintomas?: string[];

  @Prop({ type: Object })
  tratamiento?: {
    medicacion: string;
    dosis: string;
    frecuencia: string;
  };
}

export const HistorialSchema = SchemaFactory.createForClass(Historial);