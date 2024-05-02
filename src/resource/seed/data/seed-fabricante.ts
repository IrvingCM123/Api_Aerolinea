interface Fabricante {
  fabricante_Nombre: string;
  fabricante_Descripcion: string;
  fabricante_Telefono: string;
  fabricante_Email: string;
}

interface SeedFabricante {
  fabricantes: Fabricante[];
}

export const initialFabricantes: SeedFabricante = {
  fabricantes: [
    {
      fabricante_Nombre: 'Fabricante 1',
      fabricante_Descripcion: 'Descripción del fabricante 1',
      fabricante_Telefono: '1234567890',
      fabricante_Email: 'email1@example.com',
    },
    {
      fabricante_Nombre: 'Fabricante 2',
      fabricante_Descripcion: 'Descripción del fabricante 2',
      fabricante_Telefono: '0987654321',
      fabricante_Email: 'email2@example.com',
    },
    {
      fabricante_Nombre: 'Fabricante 3',
      fabricante_Descripcion: 'Descripción del fabricante 3',
      fabricante_Telefono: '5555555555',
      fabricante_Email: 'email3@example.com',
    },
    {
      fabricante_Nombre: 'Fabricante 4',
      fabricante_Descripcion: 'Descripción del fabricante 4',
      fabricante_Telefono: '6666666666',
      fabricante_Email: 'email4@example.com',
    },
    {
      fabricante_Nombre: 'Fabricante 5',
      fabricante_Descripcion: 'Descripción del fabricante 5',
      fabricante_Telefono: '7777777777',
      fabricante_Email: 'email5@example.com',
    },
    {
      fabricante_Nombre: 'Fabricante 6',
      fabricante_Descripcion: 'Descripción del fabricante 6',
      fabricante_Telefono: '8888888888',
      fabricante_Email: 'email6@example.com',
    },
    {
      fabricante_Nombre: 'Fabricante 7',
      fabricante_Descripcion: 'Descripción del fabricante 7',
      fabricante_Telefono: '9999999999',
      fabricante_Email: 'email7@example.com',
    },
    {
      fabricante_Nombre: 'Fabricante 8',
      fabricante_Descripcion: 'Descripción del fabricante 8',
      fabricante_Telefono: '1010101010',
      fabricante_Email: 'email8@example.com',
    },
    {
      fabricante_Nombre: 'Fabricante 9',
      fabricante_Descripcion: 'Descripción del fabricante 9',
      fabricante_Telefono: '1111111111',
      fabricante_Email: 'email9@example.com',
    },
    {
      fabricante_Nombre: 'Fabricante 10',
      fabricante_Descripcion: 'Descripción del fabricante 10',
      fabricante_Telefono: '1212121212',
      fabricante_Email: 'email10@example.com',
    },
  ],
};
