import { IsNotEmpty } from 'class-validator';

export class OrderDto {
  @IsNotEmpty()
  seller: number;
  @IsNotEmpty()
  client: number;
  @IsNotEmpty()
  book: number;
  @IsNotEmpty()
  category: number;
}
