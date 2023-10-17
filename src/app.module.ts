import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { BooksModule } from './books/books.module';
import { SellerModule } from './seller/seller.module';
import { ClientModule } from './client/client.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    UserModule,
    CategoryModule,
    BooksModule,
    SellerModule,
    ClientModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
