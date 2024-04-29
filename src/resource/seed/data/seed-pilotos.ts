import { Estado_Logico } from "src/common/enums/estado_logico.enum";

interface Piloto {
  piloto_Nombre: string;
  piloto_Apellidos: string;
  piloto_Telefono: string;
  piloto_Correo_Electronico: string;
  piloto_Licencia_Piloto: string;
  piloto_Fecha_Nacimiento: Date;
  piloto_Nacionalidad: string;
  piloto_Horas_Vuelo: number;
  piloto_Certificaciones: string[];
  piloto_Fecha_Expedicion_Licencia: Date;
  piloto_Estado_Logico: EstadoLogicoPiloto;
}

type EstadoLogicoPiloto = Estado_Logico;

interface SeedPilotos {
  pilotos: Piloto[];
}

export const initialPilotos: SeedPilotos = {
  pilotos: [
    {
      piloto_Nombre: 'Nombre Piloto 1',
      piloto_Apellidos: 'Apellidos Piloto 1',
      piloto_Telefono: '1234567890',
      piloto_Correo_Electronico: 'piloto1@example.com',
      piloto_Licencia_Piloto: 'Licencia123',
      piloto_Fecha_Nacimiento: new Date('1990-01-01'),
      piloto_Nacionalidad: 'Nacionalidad Piloto 1',
      piloto_Horas_Vuelo: 1000,
      piloto_Certificaciones: ['Certificacion1', 'Certificacion2'],
      piloto_Fecha_Expedicion_Licencia: new Date('2010-01-01'),
      piloto_Estado_Logico: Estado_Logico.ACTIVO,
    },
    {
      piloto_Nombre: 'Nombre Piloto 2',
      piloto_Apellidos: 'Apellidos Piloto 2',
      piloto_Telefono: '0987654321',
      piloto_Correo_Electronico: 'piloto2@example.com',
      piloto_Licencia_Piloto: 'Licencia456',
      piloto_Fecha_Nacimiento: new Date('1985-05-05'),
      piloto_Nacionalidad: 'Nacionalidad Piloto 2',
      piloto_Horas_Vuelo: 1500,
      piloto_Certificaciones: ['Certificacion3'],
      piloto_Fecha_Expedicion_Licencia: new Date('2008-05-05'),
      piloto_Estado_Logico: Estado_Logico.ACTIVO,
    },
    {
      piloto_Nombre: 'Nombre Piloto 3',
      piloto_Apellidos: 'Apellidos Piloto 3',
      piloto_Telefono: '1357924680',
      piloto_Correo_Electronico: '',
      piloto_Licencia_Piloto: 'Licencia789',
      piloto_Fecha_Nacimiento: new Date('1995-12-25'),
      piloto_Nacionalidad: 'Nacionalidad Piloto 3',
      piloto_Horas_Vuelo: 500,
      piloto_Certificaciones: ['Certificacion4'],
      piloto_Fecha_Expedicion_Licencia: new Date('2015-12-25'),
      piloto_Estado_Logico: Estado_Logico.INACTIVO,
    },
  ],
};
