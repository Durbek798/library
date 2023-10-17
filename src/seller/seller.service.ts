import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { SellerDto } from './dto/seller.dto';

@Injectable()
export class SellerService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAll() {
    return this.prismaService.seller.findMany({
      include: {
        Selled_books: true,
      },
    });
  }
  async create(dto: SellerDto) {
    const newseller = await this.prismaService.seller.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: dto.password,
      },
    });
    return newseller;
  }
  async update(id: number, dto: SellerDto) {
    const seller = await this.prismaService.seller.update({
      where: {
        id: Number(id),
      },
      data: {
        name: dto.name,
        email: dto.email,
        password: dto.password,
      },
    });
    return seller;
  }
  async delete(id: number) {
    await this.prismaService.seller.delete({
      where: {
        id: Number(id),
      },
    });

    const remainingSellers = await this.prismaService.seller.findMany();

    return remainingSellers;
  }
}
