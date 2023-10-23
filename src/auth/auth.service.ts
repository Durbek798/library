import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as bcrypt from 'bcrypt';
import { Tokens } from './types/tokens.type';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async hashData(data: string) {
    return await bcrypt.hash(data, 10);
  }
  async getTokens(id: number, email: string) {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: id,
          email,
        },
        {
          secret: 'at-sectet',
          expiresIn: 60 * 15,
        },
      ),
      this.jwtService.signAsync(
        {
          sub: id,
          email,
        },
        {
          secret: 'rt-sectet',
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);
    const tokens = {
      access_token: at,
      refresh_token: rt,
    };
    return tokens;
  }
  async register(dto: AuthDto): Promise<Tokens> {
    const hash = await this.hashData(dto.password);
    const newAuthor = await this.prisma.author.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: hash,
      },
    });
    const tokens = await this.getTokens(newAuthor.id, newAuthor.email);
    await this.updateRtHash(newAuthor.id, tokens.refresh_token);
    return tokens;
  }

  async login() {
    return 'Register page';
  }

  async updateRtHash(id: number, rt: string) {
    const hash = await this.hashData(rt);
    await this.prisma.author.update({
      where: {
        id: Number(id),
      },
      data: {
        hashedRt: hash,
      },
    });
  }
}
