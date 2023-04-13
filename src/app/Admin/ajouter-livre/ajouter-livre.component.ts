import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";
import {Router} from "@angular/router";
import {livreData} from "../../livremodel";

@Component({
  selector: 'app-ajouter-livre',
  templateUrl: './ajouter-livre.component.html',
  styleUrls: ['./ajouter-livre.component.css']
})
export class AjouterLivreComponent implements OnInit{
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
  }

  addData(data: livreData) {
    // console.log(data);
    this.api.ajouterLivre(data).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/Admin/voir-livre']);
    });
  }

}
