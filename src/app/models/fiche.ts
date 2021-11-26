import { Themes } from "./themes";

export class Fiche {
    _theme : string;
    _chapitre : string;
    _front : string;
    _back : string;

    get theme(){
      return this._theme;
    }
    set theme(theme){
      this._theme = theme;
    }

    get front(){
      return this._front;
    }
    set front(front){
      this._front = front;
    }

    get back(){
      return this._back;
    }
    set back(back){
      this._back = back;
    }
}
