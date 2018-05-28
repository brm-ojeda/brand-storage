import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PublicRoutingModule } from './public-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


// Servicios
import { RequestService } from '../services/app.request';
import { LoginService } from '../services/login.service';
import { browserWindowProvider, windowProvider } from "../services/window.service";

//pipes
import {NgPipesModule} from 'ngx-pipes';

//Componentes
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CardComponent } from './components/card/card.component';



//Vistas
import { HomeComponent } from './home/home.component';
import { GuideComponent } from './guidelines/guidelines.component';


//config app Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyDGcz3yTNfhXuCRlGUpcJcy5P7byDfXIF0",
    authDomain: "logineddie.firebaseapp.com",
    databaseURL: "https://logineddie.firebaseio.com",
    projectId: "logineddie",
    storageBucket: "logineddie.appspot.com",
    messagingSenderId: "857603249582"
};

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    PublicRoutingModule,
    NgbModule,
    FormsModule,
    NgPipesModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
  	CardComponent,
    HomeComponent,
    GuideComponent
  ],
  providers: [
    RequestService,
    browserWindowProvider,
    windowProvider,
    LoginService
  ],
  schemas: [ NO_ERRORS_SCHEMA ] // para transclusion de contenido ng-content


})
export class PublicModule { }
