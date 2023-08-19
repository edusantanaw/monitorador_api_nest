import { IsEmail, IsNotEmpty } from "class-validator/";

export class SignupDto {
    @IsNotEmpty({message: "O nome é obrigatorio!"})
    name: string;
    @IsNotEmpty({message: "O email é obrigatorio!"})
    @IsEmail()
    email: string;
    @IsNotEmpty({message: "A senha é obrigatoria!"})
    password: string;
}