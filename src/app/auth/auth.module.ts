import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoggingComponent } from './components/logging/logging.component';



@NgModule({
  declarations: [
    LoggingComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
