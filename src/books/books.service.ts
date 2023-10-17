import { Injectable } from '@nestjs/common';
import { BookDto } from './dto/book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}
  async getAll() {
    return await this.prisma.books.findMany({
      include: {
        sells: true,
      },
    });
  }
  async create(dto: BookDto) {
    try {
      const createdBook = await this.prisma.books.create({
        data: {
          name: dto.name,
          author: {
            connect: {
              id: Number(dto.authorId),
            },
          },
          category: {
            connect: {
              id: Number(dto.categoryId),
            },
          },
        },
      });
      return createdBook;
    } catch (error) {
      // Handle any potential errors here
      throw new Error(`Error creating a book: ${error.message}`);
    }
  }
  async update(id: number, dto: BookDto) {
    try {
      const updatedBook = await this.prisma.books.update({
        where: {
          id: Number(id),
        },
        data: {
          name: dto.name,
          author: {
            connect: {
              id: Number(dto.authorId),
            },
          },
          category: {
            connect: {
              id: Number(dto.categoryId),
            },
          },
        },
      });
      return updatedBook;
    } catch (error) {
      // Handle any potential errors here
      throw new Error(`Error updating ${dto.name}  book: ${error.message}`);
    }
  }

  async delete(id: number) {
    await this.prisma.books.delete({
      where: {
        id: Number(id),
      },
    });
    return 'Successfully deleted';
  }
}
