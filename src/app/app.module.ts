import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingsDetailPageComponent } from './listings-detail-page/listings-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingsPageComponent } from './new-listings-page/new-listings-page.component';
import { EditListingsPageComponent } from './edit-listings-page/edit-listings-page.component';
import {FormsModule} from "@angular/forms";
import { ListingsDataFormComponent } from './listings-data-form/listings-data-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AngularFireModule} from "@angular/fire/compat";
import { AngularFireAuthModule} from "@angular/fire/compat/auth";
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ListingsDetailPageComponent,
    ContactPageComponent,
    MyListingsPageComponent,
    NewListingsPageComponent,
    EditListingsPageComponent,
    ListingsDataFormComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
