export interface Thought {
  id?: number;
  content: string;
  author: string;
  model: string;
  favorite: boolean | string;
}
