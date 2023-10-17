import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDto } from './dto/client.dto';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  @Get()
  async index() {
    return this.clientService.index();
  }
  @Post('')
  async create(@Body() dto: ClientDto) {
    return this.clientService.create(dto);
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: ClientDto) {
    return this.clientService.update(id, dto);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.clientService.delete(id);
  }
}
