import { IsNotEmpty, IsString } from 'class-validator';

export class CreateParticipanteDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagemUrl: string;

  @IsNotEmpty()
  @IsString()
  nascimento: number;

  @IsNotEmpty()
  @IsString()
  filme: string;
}