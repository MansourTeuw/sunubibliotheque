import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {livreData} from "../livremodel";


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit{
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

}
