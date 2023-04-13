import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {AproposComponent} from "./apropos/apropos.component";
import {ContactComponent} from "./contact/contact.component";
import {AjouterLivreComponent} from "./Admin/ajouter-livre/ajouter-livre.component";
import {ModifierLivreComponent} from "./Admin/modifier-livre/modifier-livre.component";
import {VoirLivreComponent} from "./Admin/voir-livre/voir-livre.component";




const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'Admin/ajouter-livre', component: AjouterLivreComponent },
  { path: 'Admin/modifier-livre', component: ModifierLivreComponent },
  { path: 'Admin/voir-livre', component: VoirLivreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
