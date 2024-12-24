import { Category } from "./Category";

export interface Video {
  title: string;
  description: string;
  poster: File | null | string;
  link: File | null | string;
  author?: string;
  category: string;
  isAvailable: true;
  created_at?: Date; //? = optionnel
  updated_at?: Date; //? = optionnel
  
}