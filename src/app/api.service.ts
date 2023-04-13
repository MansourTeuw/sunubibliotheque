import { Injectable } from '@angular/core';
import {livreData} from "./livremodel";
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Ajouter livre

  ajouterLivre(data: livreData) {
    return this.http.post('http://localhost:3000/livre', data);
  }

  // Afficher les livres

  requeteLivre() {
    return this.http.get<livreData[]>('http://localhost:3000/livre/');
  }

  // Modifier Livre
  modifierLivre(livre: livreData, id: number) {
    return this.http.put<livreData>('http://localhost:3000/livre/' + id, livre);
  }

  // En modifiant le livre par id
  requeteLivreParId(id: string) {
    return this.http.get<livreData>('http://localhost:3000/livre/' + id);
  }

  // Supprimer un livre

  supprimerLivre(id: number) {
    return this.http.delete('http://localhost:3000/livre/' + id);
  }

}


