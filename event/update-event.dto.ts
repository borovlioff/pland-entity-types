import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class UpdateEventDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  ageLimit?: number;

  @IsOptional()
  @IsNumber()
  participants?: number;

  @IsOptional()
  @IsNumber()
  teams?: number;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsString()
  coordinates?: string;
}
