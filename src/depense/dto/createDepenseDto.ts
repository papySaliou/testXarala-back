import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDepenseDto {
  @IsNotEmpty()
  @IsString()
  titre: string;

  @IsNotEmpty()
  @IsNumber()
  montant: number;
}
