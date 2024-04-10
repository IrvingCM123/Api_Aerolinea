import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('emailvalidation')
  create(@Body() Data: string) {
    return this.clientService.validar_cuenta(Data);
  }
}
