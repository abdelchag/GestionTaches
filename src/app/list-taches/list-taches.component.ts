import { Component, OnInit } from '@angular/core';
import { Tache } from "../model/tache.model";
import {TacheService} from "../service/tache.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-list-taches',
  templateUrl: './list-taches.component.html',
  styleUrls: ['./list-taches.component.css']
})
export class ListTachesComponent implements OnInit {



  constructor(public tacheService: TacheService, private router: Router) { }

  ngOnInit() {
  }

  goToAdd(){
    this.router.navigate(["ajouter"]);
  }

  supprimer(index : number){
    this.tacheService.taches.splice(index, 1);
    this.router.navigate(["list"]);
  }

  modifier(index : number){
    this.router.navigate(["modifier", index]);
  }

}
