import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async index() {
    return this.prismaService.author.findMany({
      include: {
        books: true,
      },
    });
  }

  async create(dto: UserDto) {
    const newUser = await this.prismaService.author.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: dto.password,
      },
    });
    return newUser;
  }
  async update(id: number, dto: UserDto) {
    const user = await this.prismaService.author.update({
      where: {
        id: Number(id),
      },
      data: {
        name: dto.name,
        email: dto.email,
        password: dto.password,
      },
    });
    return user;
  }
  async delete(id: number) {
    const user = await this.prismaService.author.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    await this.prismaService.author.delete({
      where: {
        id: Number(id),
      },
    });

    const remainingUsers = await this.prismaService.author.findMany();

    return remainingUsers;
  }
}
