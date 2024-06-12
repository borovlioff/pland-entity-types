import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class UpdatePrivilegesDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsEnum(['Admin', 'Moderator', 'User'])
  privileges: 'Admin' | 'Moderator' | 'User';
}
