import { AuthInterceptor } from './shared/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { UserService } from './shared/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import {  HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { MyMainnavComponent } from './my-mainnav/my-mainnav.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbeddinComponent } from './forbeddin/forbeddin.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { CategoryListComponent } from './admin/category-list/category-list.component';
import { AddMovieComponent } from './admin/add-movie/add-movie.component';
import { MovieListComponent } from './admin/movie-list/movie-list.component';
import { MainComponent } from './client/main/main.component';
import { AddtvshowComponent } from './admin/addtvshow/addtvshow.component';
import { TvshowlistComponent } from './admin/tvshowlist/tvshowlist.component';
import { EpisodelistComponent } from './admin/episodelist/episodelist.component';
import { AddepisodeComponent } from './admin/addepisode/addepisode.component';
import { TvlistComponent } from './client/tvlist/tvlist.component';
import { SearchComponent } from './client/search/search.component';
import { RighthomeComponent } from './client/righthome/righthome.component';
import { LefthomeComponent } from './client/lefthome/lefthome.component';
import { MovwithcatnameComponent } from './client/movwithcatname/movwithcatname.component';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { MoviesComponent } from './client/movies/movies.component';
import { TestComponent } from './test/test.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SwiperModule } from 'swiper/angular';






@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    MyMainnavComponent,
    LoginComponent,
    HomeComponent,
    AdminPanelComponent,
    ForbeddinComponent,
    AddCategoryComponent,
    CategoryListComponent,
    AddMovieComponent,
    MovieListComponent,
    MainComponent,
    AddtvshowComponent,
    TvshowlistComponent,
    EpisodelistComponent,
    AddepisodeComponent,
    TvlistComponent,
    SearchComponent,
    RighthomeComponent,
    LefthomeComponent,
    MovwithcatnameComponent,
    MyfooterComponent,
    MoviesComponent,
    TestComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({progressBar:true}),
    SwiperModule,


  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
