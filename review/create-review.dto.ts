import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  eventId: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsNumber()
  rating: number;
}
