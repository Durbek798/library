import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  async getAll() {
    return this.booksService.getAll();
  }
  @Post('')
  async create(@Body() dto: BookDto) {
    return this.booksService.create(dto);
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: BookDto) {
    return this.booksService.update(id, dto);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.booksService.delete(id);
  }
}
