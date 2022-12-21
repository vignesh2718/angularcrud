import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StatusComponent } from './status/status.component';
import {MatIconModule} from '@angular/material/icon';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { AccessRoutingModule } from './access/access-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { MaterialModule } from 'src/material-model';
import { TokenInterceptorService } from './Service/token-interceptor.service';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { ModalpopupComponent } from './modalpopup/modalpopup.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StatusComponent,
    AddcontactComponent,
    UserComponent,
    ModalpopupComponent,
    // UserMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  AccessRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule,MatIconModule,MaterialModule,ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
