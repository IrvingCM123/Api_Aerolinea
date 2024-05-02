import { Estado_Logico } from 'src/common/enums/estado_logico.enum';

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
    {
      piloto_Nombre: 'Nombre Piloto 4',
      piloto_Apellidos: 'Apellidos Piloto 4',
      piloto_Telefono: '9876543210',
      piloto_Correo_Electronico: 'piloto4@example.com',
      piloto_Licencia_Piloto: 'Licencia789',
      piloto_Fecha_Nacimiento: new Date('1992-03-15'),
      piloto_Nacionalidad: 'Nacionalidad Piloto 4',
      piloto_Horas_Vuelo: 800,
      piloto_Certificaciones: ['Certificacion5', 'Certificacion6'],
      piloto_Fecha_Expedicion_Licencia: new Date('2012-03-15'),
      piloto_Estado_Logico: Estado_Logico.ACTIVO,
    },
    {
      piloto_Nombre: 'Nombre Piloto 5',
      piloto_Apellidos: 'Apellidos Piloto 5',
      piloto_Telefono: '0123456789',
      piloto_Correo_Electronico: 'piloto5@example.com',
      piloto_Licencia_Piloto: 'Licencia987',
      piloto_Fecha_Nacimiento: new Date('1988-08-20'),
      piloto_Nacionalidad: 'Nacionalidad Piloto 5',
      piloto_Horas_Vuelo: 1200,
      piloto_Certificaciones: ['Certificacion7'],
      piloto_Fecha_Expedicion_Licencia: new Date('2006-08-20'),
      piloto_Estado_Logico: Estado_Logico.ACTIVO,
    },
    {
      piloto_Nombre: 'Nombre Piloto 6',
      piloto_Apellidos: 'Apellidos Piloto 6',
      piloto_Telefono: '9876543210',
      piloto_Correo_Electronico: 'piloto6@example.com',
      piloto_Licencia_Piloto: 'Licencia654',
      piloto_Fecha_Nacimiento: new Date('1993-07-10'),
      piloto_Nacionalidad: 'Nacionalidad Piloto 6',
      piloto_Horas_Vuelo: 700,
      piloto_Certificaciones: ['Certificacion8'],
      piloto_Fecha_Expedicion_Licencia: new Date('2013-07-10'),
      piloto_Estado_Logico: Estado_Logico.ACTIVO,
    },
    {
      piloto_Nombre: 'Nombre Piloto 7',
      piloto_Apellidos: 'Apellidos Piloto 7',
      piloto_Telefono: '1234567890',
      piloto_Correo_Electronico: 'piloto7@example.com',
      piloto_Licencia_Piloto: 'Licencia321',
      piloto_Fecha_Nacimiento: new Date('1991-11-11'),
      piloto_Nacionalidad: 'Nacionalidad Piloto 7',
      piloto_Horas_Vuelo: 1100,
      piloto_Certificaciones: ['Certificacion9'],
      piloto_Fecha_Expedicion_Licencia: new Date('2011-11-11'),
      piloto_Estado_Logico: Estado_Logico.INACTIVO,
    },
    {
      piloto_Nombre: 'Nombre Piloto 8',
      piloto_Apellidos: 'Apellidos Piloto 8',
      piloto_Telefono: '0123456789',
      piloto_Correo_Electronico: 'piloto8@example.com',
      piloto_Licencia_Piloto: 'Licencia246',
      piloto_Fecha_Nacimiento: new Date('1986-04-30'),
      piloto_Nacionalidad: 'Nacionalidad Piloto 8',
      piloto_Horas_Vuelo: 1300,
      piloto_Certificaciones: ['Certificacion10'],
      piloto_Fecha_Expedicion_Licencia: new Date('2004-04-30'),
      piloto_Estado_Logico: Estado_Logico.ACTIVO,
    },
    {
      piloto_Nombre: 'Nombre Piloto 9',
      piloto_Apellidos: 'Apellidos Piloto 9',
      piloto_Telefono: '9876543210',
      piloto_Correo_Electronico: 'piloto9@example.com',
      piloto_Licencia_Piloto: 'Licencia135',
      piloto_Fecha_Nacimiento: new Date('1994-09-05'),
      piloto_Nacionalidad: 'Nacionalidad Piloto 9',
      piloto_Horas_Vuelo: 600,
      piloto_Certificaciones: ['Certificacion11'],
      piloto_Fecha_Expedicion_Licencia: new Date('2014-09-05'),
      piloto_Estado_Logico: Estado_Logico.ACTIVO,
    },
    {
      piloto_Nombre: 'Nombre Piloto 10',
      piloto_Apellidos: 'Apellidos Piloto 10',
      piloto_Telefono: '1234567890',
      piloto_Correo_Electronico: 'piloto10@example.com',
      piloto_Licencia_Piloto: 'Licencia357',
      piloto_Fecha_Nacimiento: new Date('1997-02-20'),
      piloto_Nacionalidad: 'Nacionalidad Piloto 10',
      piloto_Horas_Vuelo: 900,
      piloto_Certificaciones: ['Certificacion12'],
      piloto_Fecha_Expedicion_Licencia: new Date('2017-02-20'),
      piloto_Estado_Logico: Estado_Logico.INACTIVO,
    },
  ],
};
