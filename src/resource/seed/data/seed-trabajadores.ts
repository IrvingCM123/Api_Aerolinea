interface Trabajador {
  nombre: string;
  apellidos: string;
  telefono: string;
  correoElectronico: string;
  fechaNacimiento: Date;
  nacionalidad: string;
  horasVuelo: number;
}

interface SeedTrabajadores {
  trabajadores: Trabajador[];
}

export const initialTrabajadores: SeedTrabajadores = {
  trabajadores: [
    {
      nombre: 'Nombre Trabajador 1',
      apellidos: 'Apellidos Trabajador 1',
      telefono: '1234567890',
      correoElectronico: 'trabajador1@example.com',
      fechaNacimiento: new Date('1990-01-01'),
      nacionalidad: 'Nacionalidad Trabajador 1',
      horasVuelo: 1000,
    },
    {
      nombre: 'Nombre Trabajador 2',
      apellidos: 'Apellidos Trabajador 2',
      telefono: '0987654321',
      correoElectronico: 'trabajador2@example.com',
      fechaNacimiento: new Date('1985-05-05'),
      nacionalidad: 'Nacionalidad Trabajador 2',
      horasVuelo: 1500,
    },
    {
      nombre: 'Nombre Trabajador 3',
      apellidos: 'Apellidos Trabajador 3',
      telefono: '5555555555',
      correoElectronico: 'trabajador3@example.com',
      fechaNacimiento: new Date('1995-10-10'),
      nacionalidad: 'Nacionalidad Trabajador 3',
      horasVuelo: 800,
    },
    {
      nombre: 'Nombre Trabajador 4',
      apellidos: 'Apellidos Trabajador 4',
      telefono: '6666666666',
      correoElectronico: 'trabajador4@example.com',
      fechaNacimiento: new Date('1992-02-02'),
      nacionalidad: 'Nacionalidad Trabajador 4',
      horasVuelo: 1200,
    },
    {
      nombre: 'Nombre Trabajador 5',
      apellidos: 'Apellidos Trabajador 5',
      telefono: '7777777777',
      correoElectronico: 'trabajador5@example.com',
      fechaNacimiento: new Date('1998-03-03'),
      nacionalidad: 'Nacionalidad Trabajador 5',
      horasVuelo: 700,
    },
    {
      nombre: 'Nombre Trabajador 6',
      apellidos: 'Apellidos Trabajador 6',
      telefono: '8888888888',
      correoElectronico: 'trabajador6@example.com',
      fechaNacimiento: new Date('1991-04-04'),
      nacionalidad: 'Nacionalidad Trabajador 6',
      horasVuelo: 1100,
    },
    // New workers
    {
      nombre: 'Nombre Trabajador 7',
      apellidos: 'Apellidos Trabajador 7',
      telefono: '9999999999',
      correoElectronico: 'trabajador7@example.com',
      fechaNacimiento: new Date('1994-06-06'),
      nacionalidad: 'Nacionalidad Trabajador 7',
      horasVuelo: 900,
    },
    {
      nombre: 'Nombre Trabajador 8',
      apellidos: 'Apellidos Trabajador 8',
      telefono: '1010101010',
      correoElectronico: 'trabajador8@example.com',
      fechaNacimiento: new Date('1989-07-07'),
      nacionalidad: 'Nacionalidad Trabajador 8',
      horasVuelo: 1300,
    },
    {
      nombre: 'Nombre Trabajador 9',
      apellidos: 'Apellidos Trabajador 9',
      telefono: '1212121212',
      correoElectronico: 'trabajador9@example.com',
      fechaNacimiento: new Date('1993-08-08'),
      nacionalidad: 'Nacionalidad Trabajador 9',
      horasVuelo: 600,
    },
    {
      nombre: 'Nombre Trabajador 10',
      apellidos: 'Apellidos Trabajador 10',
      telefono: '1313131313',
      correoElectronico: 'trabajador10@example.com',
      fechaNacimiento: new Date('1996-09-09'),
      nacionalidad: 'Nacionalidad Trabajador 10',
      horasVuelo: 1000,
    },
  ],
};
