import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,  AppRoutingModule, ],
  declarations: [ AppComponent, AuthorizationComponent, RegistrationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
