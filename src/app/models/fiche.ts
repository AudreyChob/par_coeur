import { Themes } from "./themes";

export class Fiche {
    _theme : Themes;
    _frontCard : string;
    _backCard : string;
  
    get theme(){
      return this._theme;
    }
    set theme(theme){
      this._theme = theme;
    }

    get frontCard(){
      return this._frontCard;
    }
    set frontCard(front){
      this._frontCard = front;
    }

    get backCard(){
      return this._backCard;
    }
    set backCard(back){
      this._backCard = back;
    }
}
