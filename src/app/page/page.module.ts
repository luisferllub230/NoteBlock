import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    Page404Component
  ],
  imports: [
    CommonModule
  ]
})
export class PageModule { }
