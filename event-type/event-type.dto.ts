export class EventTypeDto {
    id: string;
    name: string;
    description?: string;
    ageLimit?: number;
    participants?: number;
    teams?: number;
    roles?: string[];
    createdAt: Date;
    updatedAt: Date;
  }
  