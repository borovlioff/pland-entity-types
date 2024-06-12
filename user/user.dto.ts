export class UserDto {
    id: string;
    email: string;
    name: string;
    city?: string;
    age?: string;
    favoriteEvents?: string[];
    privileges: 'Admin' | 'Moderator' | 'User';
    createdAt: Date;
    updatedAt: Date;
  }
  