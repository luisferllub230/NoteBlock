import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggingComponent } from './auth/components/logging/logging.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AboutComponent } from './page/components/about/about.component';
import { HomeComponent } from './page/components/home/home.component';
import { Page404Component } from './page/components/page404/page404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'logging', component: LoggingComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'Home', component: HomeComponent},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
