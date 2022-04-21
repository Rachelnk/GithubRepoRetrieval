import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserserviceService } from './userservice.service';
// import { HighlightDirective } from './highlight.directive';
import { DatePipe } from '@angular/common';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { Users } from './users';
import { DatepipePipe } from './datepipe.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    UsersComponent,
    DatepipePipe,
    NotFoundComponent,
    SearchFormComponent,
    NavbarComponent,
    HighlightDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
