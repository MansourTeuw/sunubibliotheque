import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AjouterLivreComponent} from "./Admin/ajouter-livre/ajouter-livre.component";
import {ModifierLivreComponent} from "./Admin/modifier-livre/modifier-livre.component";
import {VoirLivreComponent} from "./Admin/voir-livre/voir-livre.component";
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AproposComponent,
    ContactComponent,
    AjouterLivreComponent,
    VoirLivreComponent,
    ModifierLivreComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
