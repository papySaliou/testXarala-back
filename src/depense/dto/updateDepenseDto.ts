import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateDepenseDto {
  @IsOptional()
  @IsString()
  readonly titre?: string;

  @IsOptional()
  @IsNumber()
  readonly montant?: number;
}
