import { Movie } from './movie.model';



export class Category
{
  category_Id:number;
  category_Name:string;
  isActive:boolean;
  movies:Array<Movie>;


}
