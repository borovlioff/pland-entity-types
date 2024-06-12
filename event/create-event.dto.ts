import { IsNotEmpty, IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  ageLimit?: number;

  @IsOptional()
  @IsNumber()
  participants?: number;

  @IsOptional()
  @IsNumber()
  teams?: number;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsOptional()
  @IsString()
  coordinates?: string;
}
