import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";
import {livreData} from "../../livremodel";



@Component({
  selector: 'app-voir-livre',
  templateUrl: './voir-livre.component.html',
  styleUrls: ['./voir-livre.component.css']
})
export class VoirLivreComponent implements OnInit{
  livre: undefined | livreData[];
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.requteLivre();
  }
  requteLivre() {
    this.api.requeteLivre().subscribe((res) => {
      this.livre = res;
      console.log(res);
    });
  }


  // Supprimer livre
  supprimerLivre(id: number) {
    if (confirm('Etes vous sure de vouloir supprimer ce livre'))
      this.api.supprimerLivre(id).subscribe((res) => {})
    this.requteLivre();
  }
}

