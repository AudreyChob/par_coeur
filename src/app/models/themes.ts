export class Themes {
    _nom : string
    _nb_chapitre : number = 1

    get nom(){
      return this._nom;
    }
    set nom(nom){
      this._nom = nom;
    }

    get nb_chapitre(){
      return this._nb_chapitre;
    }
    set nb_chapitre(nb){
      this._nb_chapitre = nb;
    }
}
