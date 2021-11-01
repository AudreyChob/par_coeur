import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-fiches',
  templateUrl: './modal-fiches.page.html',
  styleUrls: ['./modal-fiches.page.scss'],
})
export class ModalFichesPage implements OnInit {

  @Input() theme : string
  frontCard : string = "";
  backCard : string = "";
  chapitre : string = "";
  constructor(
    public afDB: AngularFireDatabase,
    public modalController: ModalController


  ) { }

  ngOnInit() {
  }

  addFiche(){
    this.afDB.list('Fiches/').push({
      theme: this.theme,
      chapitre : this.chapitre,
      front : this.frontCard,
      back : this.backCard
    });
    this.dismiss()
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
