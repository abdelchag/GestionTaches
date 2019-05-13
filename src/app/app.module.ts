import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


import { AppComponent } from './app.component';
import { ListTachesComponent } from './list-taches/list-taches.component';
import { AjouterModifierComponent } from './ajouter-modifier/ajouter-modifier.component';
import { FormsModule } from '@angular/forms';
import {TacheService} from "./service/tache.service";

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListTachesComponent },
  { path: 'ajouterModifier/:type/:index', component: AjouterModifierComponent }, //1 ajouter - 2 modifier
  { path: 'ajouter', redirectTo:"ajouterModifier/1/0", pathMatch: 'full'},
  { path: 'modifier/:index', redirectTo:"ajouterModifier/2/:index", pathMatch: 'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    ListTachesComponent,
    AjouterModifierComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [TacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
