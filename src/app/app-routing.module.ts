import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"user-profile", component:UsersComponent},
  {path:"repositories", component:RepositoriesComponent},
  {path: "", redirectTo:"/user-profile", pathMatch:"full"},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
