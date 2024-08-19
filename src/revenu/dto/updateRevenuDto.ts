import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateRevenuDto {
  @IsOptional()
  @IsString()
  readonly titre?: string;

  @IsOptional()
  @IsNumber()
  readonly montant?: number;
}
