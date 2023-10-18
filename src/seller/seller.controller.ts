import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SellerDto } from './dto/seller.dto';
import { SellerService } from './seller.service';

@Controller('sellers')
@UsePipes(new ValidationPipe({ transform: true }))
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}
  @Get()
  async index() {
    return this.sellerService.getAll();
  }
  @Post('')
  async create(@Body() dto: SellerDto) {
    return this.sellerService.create(dto);
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: SellerDto) {
    return this.sellerService.update(id, dto);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.sellerService.delete(id);
  }
}
