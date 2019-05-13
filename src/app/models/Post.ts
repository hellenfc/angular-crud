import { Category } from './Category';

export class Post {
    id: number;
    title: string;
    text: string;
    categories: (number|Category)[]
}