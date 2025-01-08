import {User} from './user';

export interface Comment {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}
