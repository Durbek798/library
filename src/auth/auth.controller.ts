import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async Register(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.register(dto);
  }
  @Post('login')
  async login() {
    this.authService.login();
  }
}
