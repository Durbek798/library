import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async index() {
    return this.userService.index();
  }
  @Post('')
  async create(@Body() dto: UserDto) {
    return this.userService.create(dto);
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UserDto) {
    return this.userService.update(id, dto);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
