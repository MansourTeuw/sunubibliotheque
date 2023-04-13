import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {livreData} from "../../livremodel";


@Component({
  selector: 'app-modifier-livre',
  templateUrl: './modifier-livre.component.html',
  styleUrls: ['./modifier-livre.component.css']
})
export class ModifierLivreComponent implements OnInit{
  dataid: any;
  public livre: livreData = {} as livreData;

  constructor(private api: ApiService, private activeroute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activeroute.paramMap.subscribe((params: Params) => {
      this.dataid = params['get']('id');
      console.log(`id = ${this.dataid}`);
    });
  }

  modifier() {
    this.api.modifierLivre(this.livre, this.dataid).subscribe((data: any) => {
      this.router.navigate(['/Admin/voir-livre']);
    });
  }
}
