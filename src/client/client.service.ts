import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientDto } from './dto/client.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async index() {
    return this.prisma.client.findMany({
      include: {
        books: true,
      },
    });
  }

  async create(dto: ClientDto) {
    const newClient = await this.prisma.client.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: dto.password,
      },
    });
    return newClient;
  }

  async update(id: number, dto: ClientDto) {
    const client = await this.prisma.client.update({
      where: {
        id: Number(id),
      },
      data: {
        name: dto.name,
        email: dto.email,
        password: dto.password,
      },
    });
    if (!client) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }
    return client;
  }

  async delete(id: number) {
    const deletedClient = await this.prisma.client.delete({
      where: {
        id: Number(id),
      },
    });

    if (!deletedClient) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }

    const remainingClients = await this.prisma.client.findMany();

    return remainingClients;
  }
}
