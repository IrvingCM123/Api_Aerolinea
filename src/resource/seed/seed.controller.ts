import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SeedService } from './seed.service';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  async executeSeed() {
    return this.seedService.runSeed();
  }

  @Get('trabajadores')
  async consulta() {
    return this.seedService.insertTripulaciones();
  }

  @Get('tripulaciones')
  async buscar() {
    return this.seedService.insertVuelos();
  }
}
