import { Category } from "./category.model";
import { CategoryService } from "./category.service";

export class Movie

{

  movie_Id:number;
  movie_Name:string;
  movie_Link:string;
  movie_Picture:string;
  isActive:boolean;
  category_Id:number;
  category:Category[];


}
