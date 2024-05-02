interface Trabajador {
  trabajador_Nombre: string;
  trabajador_Apellidos: string;
  trabajador_Telefono: string;
  trabajador_CorreoElectronico: string;
  trabajador_FechaNacimiento: Date;
  trabajador_Nacionalidad: string;
  trabajador_HorasVuelo: number;
}

interface SeedTrabajadores {
  trabajadores: Trabajador[];
}

export function registrarTrabajadores() {
  const nombresTrabajador = [
    'Nombre Trabajador 1',
    'Nombre Trabajador 2',
    'Nombre Trabajador 3',
    'Nombre Trabajador 4',
    'Nombre Trabajador 5',
    'Nombre Trabajador 6',
    'Nombre Trabajador 7',
    'Nombre Trabajador 8',
    'Nombre Trabajador 9',
    'Nombre Trabajador 10',
  ];

  const apellidosTrabajador = [
    'Apellidos Trabajador 1',
    'Apellidos Trabajador 2',
    'Apellidos Trabajador 3',
    'Apellidos Trabajador 4',
    'Apellidos Trabajador 5',
    'Apellidos Trabajador 6',
    'Apellidos Trabajador 7',
    'Apellidos Trabajador 8',
    'Apellidos Trabajador 9',
    'Apellidos Trabajador 10',
  ];

  const telefonos = [
    '1234567890',
    '0987654321',
    '5555555555',
    '6666666666',
    '7777777777',
    '8888888888',
    '9999999999',
    '1010101010',
    '1212121212',
    '1313131313',
  ];

  const correosElectronicos = [
    'trabajador1@example.com',
    'trabajador2@example.com',
    'trabajador3@example.com',
    'trabajador4@example.com',
    'trabajador5@example.com',
    'trabajador6@example.com',
    'trabajador7@example.com',
    'trabajador8@example.com',
    'trabajador9@example.com',
    'trabajador10@example.com',
  ];

  const fechasNacimiento = [
    new Date('1990-01-01'),
    new Date('1985-05-05'),
    new Date('1995-10-10'),
    new Date('1992-02-02'),
    new Date('1998-03-03'),
    new Date('1991-04-04'),
    new Date('1994-06-06'),
    new Date('1989-07-07'),
    new Date('1993-08-08'),
    new Date('1996-09-09'),
  ];

  const nacionalidadesTrabajador = [
    'Nacionalidad Trabajador 1',
    'Nacionalidad Trabajador 2',
    'Nacionalidad Trabajador 3',
    'Nacionalidad Trabajador 4',
    'Nacionalidad Trabajador 5',
    'Nacionalidad Trabajador 6',
    'Nacionalidad Trabajador 7',
    'Nacionalidad Trabajador 8',
    'Nacionalidad Trabajador 9',
    'Nacionalidad Trabajador 10',
  ];

  const horasVuelo = [1000, 1500, 800, 1200, 700, 1100, 900, 1300, 600, 1000];

  const trabajadoresGenerados = [];

  for (let i = 0; i < 10; i++) {
    const trabajador: Trabajador = {
      trabajador_Nombre: nombresTrabajador[i],
      trabajador_Apellidos: apellidosTrabajador[i],
      trabajador_Telefono: telefonos[i],
      trabajador_CorreoElectronico: correosElectronicos[i],
      trabajador_FechaNacimiento: fechasNacimiento[i],
      trabajador_Nacionalidad: nacionalidadesTrabajador[i],
      trabajador_HorasVuelo: horasVuelo[i],
    };
    trabajadoresGenerados.push(trabajador);
  }

  console.log(trabajadoresGenerados);
  return trabajadoresGenerados;
}

export const initialTrabajadores: SeedTrabajadores = {
  trabajadores: registrarTrabajadores(),
};
