import { TestComponent } from './test/test.component';
import { MovwithcatnameComponent } from './client/movwithcatname/movwithcatname.component';
import { SearchComponent } from './client/search/search.component';
import { EpisodelistComponent } from './admin/episodelist/episodelist.component';
import { AddtvshowComponent } from './admin/addtvshow/addtvshow.component';
import { MainComponent } from './client/main/main.component';
import { AddMovieComponent } from './admin/add-movie/add-movie.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ForbeddinComponent } from './forbeddin/forbeddin.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthGuard } from './shared/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './admin/movie-list/movie-list.component';
import { CategoryListComponent } from './admin/category-list/category-list.component';
import { TvshowlistComponent } from './admin/tvshowlist/tvshowlist.component';
import { AddepisodeComponent } from './admin/addepisode/addepisode.component';
import { TvlistComponent } from './client/tvlist/tvlist.component';
import { MoviesComponent } from './client/movies/movies.component';


const routes: Routes = [
  {path:"",redirectTo:"/user/login",pathMatch:"full"},
  {path:"user",component:UserComponent,children:[
    {path:"registration",component:RegistrationComponent},
    {path:"login",component:LoginComponent}
  ]},
  {path:"home",component:HomeComponent,children:[
    {path:"movies",component:MainComponent},
    {path:"tvshows",component:TvlistComponent},
    {path:"search",component:SearchComponent},
    {path:"movwithcat",component:MovwithcatnameComponent},
    {path:"movlist",component:MoviesComponent}
  ], canActivate:[AuthGuard]},
  {path:"admin",component:AdminPanelComponent,children:[
    {path:"movies",component:MovieListComponent},
    {path:"addmovie",component:AddMovieComponent},
    {path:"categories",component:CategoryListComponent},
    {path:"addcategory",component:AddCategoryComponent},
    {path:"addtvshow",component:AddtvshowComponent},
    {path:"tvshows",component:TvshowlistComponent},
    {path:"addepisode",component:AddepisodeComponent},
    {path:"episodes",component:EpisodelistComponent}

  ],canActivate:[AuthGuard],data:{permittedRoles:['Admin']}},
  {path:"forbeddin",component:ForbeddinComponent},
  {path:"test",component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
