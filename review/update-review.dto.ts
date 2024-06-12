import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateReviewDto {
  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsNumber()
  rating?: number;
}
