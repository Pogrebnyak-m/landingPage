import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ConnectionComponent } from './communication/connection.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from "@angular/material/core";

const routes = [
  {path: '', component: CoverComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'advantages', component: AdvantagesComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'feedback', component: FeedbackFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    AdvantagesComponent,
    AboutComponent,
    ServicesComponent,
    TechnologiesComponent,
    ConnectionComponent,
    ContactsComponent,
    FeedbackFormComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,

  ],
  exports:[
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
