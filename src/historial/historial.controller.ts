import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { HistorialService } from './historial.service';

@Controller('historial')
export class HistorialController {
  constructor(private readonly historialService: HistorialService) {}

  @Post()
  crearHistorial(
    @Body() datos: { 
      pacienteId: string; 
      medicoId: string; 
      diagnostico: string; 
      sintomas: string[]; 
      tratamiento: any 
    },
  ) {
    return this.historialService.create(datos);
  }

  @Get('paciente/:id')
  obtenerPorPaciente(@Param('id') pacienteId: string) {
    return this.historialService.findByPaciente(pacienteId);
  }
}