import { IsNotEmpty } from 'class-validator';

export class BookDto {
  id: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  authorId: number;
  @IsNotEmpty()
  categoryId: number;
}
