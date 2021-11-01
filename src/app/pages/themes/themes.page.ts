import { Component,  OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Router } from '@angular/router';
import { Themes } from '../../models/themes';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.page.html',
  styleUrls: ['./themes.page.scss'],
})
export class ThemesPage implements OnInit {

  themesList : any[] = [];
  theme : string = "";

  constructor(
    public afDB: AngularFireDatabase,
    public route : Router
  ) { }

  ngOnInit() {
    this.getThemes()
    console.log(this.themesList)
  }

  addTheme() {
    this.themesList = []
    console.log(this.themesList)
  	this.afDB.list('Themes/').push({
  		nom: this.theme
  	});
    this.theme = ""
    //this.getThemes()
  }

  getThemes(){
    this.themesList = []
    this.afDB.list('Themes').snapshotChanges(['child_added']).subscribe(themes=> {
      themes.forEach(theme => {
        this.themesList.push(theme.payload.exportVal().nom)
        console.log(this.themesList);
      });
    });
  }

  selectTheme(value){
    this.route.navigate(['fiches', value])
  }
}
