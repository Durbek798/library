import { IsEmail, IsNotEmpty } from 'class-validator';

export class ClientDto {
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
