import { IsNotEmpty, IsOptional, IsString, IsNumber, IsArray, ArrayMinSize } from 'class-validator';

export class CreateEventTypeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

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
  @IsArray()
  @ArrayMinSize(1)
  roles?: string[];
}
