import { Module } from '@nestjs/common';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SellerController],
  providers: [SellerService],
  imports: [PrismaModule],
})
export class SellerModule {}
