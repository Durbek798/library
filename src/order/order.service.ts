import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) {}
  async getAll() {
    return this.prismaService.sell.findMany({
      include: {
        seller: true,
        client: true,
        book: true,
        category: true,
      },
    });
  }
  async create(dto: OrderDto) {
    return this.prismaService.sell.create({
      data: {
        seller: {
          connect: {
            id: Number(dto.seller),
          },
        },
        client: {
          connect: {
            id: Number(dto.client),
          },
        },
        book: {
          connect: {
            id: Number(dto.book),
          },
        },
        category: {
          connect: {
            id: Number(dto.category),
          },
        },
      },
    });
  }
  async update(id: number, dto: OrderDto) {
    try {
      // Check if the seller record exists
      const sellerExists = await this.prismaService.seller.findUnique({
        where: {
          id: Number(dto.seller),
        },
      });

      if (!sellerExists) {
        throw new Error('Seller not found'); // You can customize this error message
      }

      return await this.prismaService.sell.update({
        where: {
          id: Number(id),
        },
        data: {
          seller: {
            connect: {
              id: Number(dto.seller),
            },
          },
          client: {
            connect: {
              id: Number(dto.client),
            },
          },
          book: {
            connect: {
              id: Number(dto.book),
            },
          },
          category: {
            connect: {
              id: Number(dto.category),
            },
          },
        },
      });
    } catch (error) {
      // Handle the error here, log it, and return an error response.
      console.error(error);
      throw new Error('Failed to update the order.');
    }
  }
  async delete(id: number) {
    return await this.prismaService.sell.delete({
      where: {
        id: Number(id),
      },
    });
  }
}

// 2
// 4
// 1
// 1
