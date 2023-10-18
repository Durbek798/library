import { IsNotEmpty } from 'class-validator';

export class CategoryDto {
  id: number;
  @IsNotEmpty()
  name: string;
}
