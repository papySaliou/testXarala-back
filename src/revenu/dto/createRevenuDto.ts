import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRevenuDto {
  @IsNotEmpty()
  @IsString()
  titre: string;

  @IsNotEmpty()
  @IsNumber()
  montant: number;
}
