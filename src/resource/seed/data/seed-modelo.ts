import { CategoriaModelo } from 'src/common/enums/categoria-modelo.enum';
import { EstadoOperativo } from 'src/common/enums/estado-operativo.enum';

interface ModeloAvion {
  modelo_Avion_Nombre: string;
  modelo_Avion_Estado: Estado_Avion;
  modelo_Avion_Categoria: Categoria_Avion;
}

type Estado_Avion = EstadoOperativo;
type Categoria_Avion = CategoriaModelo;

interface SeedModelosAvion {
  modelosAvion: ModeloAvion[];
}

export const initialModelosAvion: SeedModelosAvion = {
  modelosAvion: [
    {
      modelo_Avion_Nombre: 'Modelo 1',
      modelo_Avion_Estado: EstadoOperativo.OPERATIVO,
      modelo_Avion_Categoria: CategoriaModelo.COMERCIAL,
    },
    {
      modelo_Avion_Nombre: 'Modelo 2',
      modelo_Avion_Estado: EstadoOperativo.MANTENIMIENTO,
      modelo_Avion_Categoria: CategoriaModelo.PRIVADO,
    },
    {
      modelo_Avion_Nombre: 'Modelo 3',
      modelo_Avion_Estado: EstadoOperativo.FUERA_DE_SERVICIO,
      modelo_Avion_Categoria: CategoriaModelo.MILITAR,
    },
  ],
};
