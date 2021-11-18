import { Component,  OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Router } from '@angular/router';
import { Fiche } from 'src/app/models/fiche';
import { Themes } from '../../models/themes';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.page.html',
  styleUrls: ['./themes.page.scss'],
})
export class ThemesPage implements OnInit {

  themesList : Themes[] = [];
  theme : string = "";
  fichesList : Fiche[]

  constructor(
    public afDB: AngularFireDatabase,
    public route : Router
  ) { }

  ngOnInit() {
    this.getThemes()
  }

  addTheme() {
    this.themesList = []
  	this.afDB.list('Themes/').push({
  		nom: this.theme
  	});
    this.theme = ""
    //this.getThemes()
  }

  getThemes(){
    this.themesList = []
    this.afDB.list('Themes').snapshotChanges(['child_added']).subscribe((themes)=> {
      themes.forEach(theme => {
        this.themesList.push(theme.payload.exportVal())
      });
      //this.getFiches()
    });
  }

  // getFiches(){
  //   this.afDB.list('Fiches').snapshotChanges(['child_added']).subscribe((fiches)=> {
  //     console.log(fiches.length)
  //     fiches.forEach((fiche, x) => {
  //       // this.themesList.forEach(theme => {
  //         console.log(this.themesList.length)
  //         if(fiche.payload.exportVal().theme == this.themesList[x].nom){
  //           if(this.themesList[x].nb_chapitre == undefined){
  //             this.themesList[x].nb_chapitre = 1
  //           }
  //           this.themesList[x].nb_chapitre += 1
  //           console.log("this.themesList[x].nb_chapitre")
  //           console.log(this.themesList[x].nb_chapitre)
  //         }
  //       // });
  //     });
  //   })
  // }



  selectTheme(value : string){
    this.route.navigate(['fiches', value])
  }
}
