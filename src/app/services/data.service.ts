import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  text: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Salem',
      subject: 'Lindezo dorminhoco',
      text: 'Salem Saberhagen is a 500-year-old witch who was sentenced to spend 100 years as a cat by the Witches Council as punishment for attempting to take over the world.',
      date: '6:12 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Janis',
      subject: 'Chorona companheira',
      text: 'Janis Joplin was an American singer-songwriter who sang rock, soul, and blues music. One of the most successful and widely known rock stars of her era',
      date: '4:55 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Janisse',
      subject: 'Caçadora de moscas (Profissional)',
      text: 'Janis Joplin was an American singer-songwriter who sang rock, soul, and blues music. One of the most successful and widely known rock stars of her era',
      date: 'Yesterday',
      id: 2,
      read: false
    },
    {
      fromName: 'Gotoso',
      subject: 'Na real é um cachorro',
      text: 'Salem Saberhagen is a 500-year-old witch who was sentenced to spend 100 years as a cat by the Witches Council as punishment for attempting to take over the world.',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Juntos',
      subject: 'Não vivem sem o outro',
      text: 'Companheiros, com brigas matinas e muito banho ao longo do  dia',
      date: 'Last Week',
      id: 4,
      read: false
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
