import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  id: number;

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
