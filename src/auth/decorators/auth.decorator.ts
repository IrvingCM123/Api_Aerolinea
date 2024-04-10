import { applyDecorators, UseGuards } from '@nestjs/common';
import { Roles as Rol } from './../../common/enums/roles.enum';
import { AuthGuard } from '../guard/auth.guard';
import { RoleGuard } from '../guard/role.guard'; 
import { Roles } from './roles.decorator';

// Esta función crea un decorador de autorización que toma un rol como argumento
export function Auth(roles: Rol) {
  // Aplica los decoradores 'Roles' y 'UseGuards' al decorador que se está creando
  return applyDecorators(Roles(roles), UseGuards(AuthGuard, RoleGuard));
}

// Esta función crea un decorador de autorización que puede aceptar múltiples roles
export function AuthAll(roles: any[]) {
  // Inicializa un array para almacenar los decoradores
  const decorators = [];

  // Itera sobre cada rol en el array de roles proporcionado
  for (const role of roles) {
      // Agrega el decorador 'Roles' y el guardia 'UseGuards' para cada rol
      decorators.push(
          Roles(role), // Asumiendo que 'Roles' es una función decoradora
          UseGuards(AuthGuard, RoleGuard) // Asumiendo que 'AuthGuard' y 'RoleGuard' son guardias
      );
  }

  // Aplica todos los decoradores creados al decorador final
  return applyDecorators(...decorators);
}
