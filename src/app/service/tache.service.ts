import { Injectable } from '@angular/core';
import { Tache } from "../model/tache.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class TacheService {

  taches : Tache[] = [];
  constructor() { }

}
