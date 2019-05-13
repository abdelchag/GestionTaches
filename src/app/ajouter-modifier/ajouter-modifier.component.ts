import { Component, OnInit } from '@angular/core';
import { Tache } from "../model/tache.model"
import {ActivatedRoute, Router} from "@angular/router";
import { TacheService } from "../service/tache.service";

@Component({
  selector: 'app-ajouter-modifier',
  templateUrl: './ajouter-modifier.component.html',
  styleUrls: ['./ajouter-modifier.component.css']
})
export class AjouterModifierComponent implements OnInit {

  tache: Tache = new Tache();
  type : number;
  index: number;
  typeString : string;

  constructor(private route:ActivatedRoute, private router:Router,private tacheService: TacheService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.type = +params['type'];
      this.index = +params['index'];
    });

    if(this.type == 1){
      this.typeString = "Ajouter"
    }else{
      this.typeString = "Modifier"
      this.tache = this.tacheService.taches[this.index];
    }

  }

  save(){
    switch(this.type){
      case 1 : {
        this.ajouter();
        break;
      }
      case 2 : {
        this.modifier(this.index);
        break;
      }

    }
  }

  ajouter(){
    if(!this.tacheService.taches){
      this.tacheService.taches = [];
    }
    this.tacheService.taches.push(this.tache);
    this.router.navigate(["list"]);
  }

  modifier(index : number){
    this.tacheService.taches[index] = this.tache;
    this.router.navigate(["list"]);
  }

}
