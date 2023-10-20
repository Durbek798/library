import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  id: number;

  @IsNotEmpty({ message: " Ism bo'sh bo'lishi mumkin emas" })
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty({ message: "Parol bo'sh bo'lishi mumkin emas " })
  password: string;
}
