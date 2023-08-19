import { IsNotEmpty } from 'class-validator';

export class CreateEndPointDto {
  @IsNotEmpty({ message: 'O id do usuario é obrigatorio!' })
  userId: string;
  @IsNotEmpty({ message: 'A rota é obrigatoria!' })
  route: string;
  headers?: unknown;
}
