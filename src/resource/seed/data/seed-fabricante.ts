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
      fabricante_Email: 'email3@example',
    },
  ],
};
