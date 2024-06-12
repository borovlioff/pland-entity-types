export class EventDto {
    id: string;
    name: string;
    description: string;
    ageLimit?: number;
    participants?: number;
    teams?: number;
    city: string;
    date: string;
    coordinates?: string;
    createdAt: Date;
    updatedAt: Date;
  }
  