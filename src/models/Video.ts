import { Category } from "./Category";

export interface Video {
  title: string;
  description: string;
  poster: string;
  link: string;
  author: string;
  category: Array<Category>; //video de cathégorie
  isAvailable: boolean;
  created_at: Date;
  updated_at: Date;
  
}