import { IsNotEmpty, IsEmail } from 'class-validator';

export class SigninDto {
  @IsNotEmpty({ message: 'O email é obrigatorio!' })
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
