import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateFilmeDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagemUrl: string;

  @IsNotEmpty()
  @IsString()
  data_lancamento: number;

  @IsNotEmpty()
  @IsInt()
  duracao: number;

  @IsNotEmpty()
  @IsInt()
  genero_Id: number;

  @IsNotEmpty()
  @IsInt()
  Generos: string;

  @IsNotEmpty()
  @IsInt()
  participantes: number;
}
