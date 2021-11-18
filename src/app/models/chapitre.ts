import { Fiche } from "./fiche";
import { Themes } from "./themes";

export class Chapitre {
    _nom : string
    _theme : Themes;
    _nb_fiches : number
    _fiches : Fiche[];
    constructor(
      nom : string,
      nb_fiches : number,
    ){
      this.nom = nom;
      this.nb_fiches = nb_fiches;
    }

    get nom(){
      return this._nom;
    }
    set nom(nom){
      this._nom = nom;
    }

    get nb_fiches(){
      return this._nb_fiches;
    }
    set nb_fiches(nb){
      this._nb_fiches = nb;
    }

    get theme(){
      return this._theme;
    }
    set theme(theme){
      this._theme = theme;
    }

    get fiche(){
      return this._fiches;
    }
    set fiche(fiches){
      this._fiches = fiches;
    }
}
