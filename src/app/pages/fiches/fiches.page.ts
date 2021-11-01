import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalFichesPage } from '../modals/modal-fiches/modal-fiches.page';


@Component({
  selector: 'app-fiches',
  templateUrl: './fiches.page.html',
  styleUrls: ['./fiches.page.scss'],
})
export class FichesPage implements OnInit {
  theme : string = "";
  fichesListe = []
  constructor(
    public route : ActivatedRoute,
    public afDB: AngularFireDatabase,
    public modalController: ModalController
  )
  {
    this.getFiches()
  }
  ngOnInit() {
    this.theme = this.route.snapshot.params['theme']
  }

  async createFiche(){
    const modal = await this.modalController.create({
      component: ModalFichesPage,
      componentProps: {
      'theme': this.theme,
    }
    });
    return await modal.present();
  }

  getFiches(){
    this.afDB.list('Fiches').snapshotChanges(['child_added']).subscribe(fiches=> {
      fiches.forEach(fiche => {
        console.log(this.fichesListe.indexOf(fiche.payload.exportVal().chapitre))
        if(this.fichesListe.indexOf(fiche.payload.exportVal().chapitre) == -1){
          this.fichesListe.push(fiche.payload.exportVal().chapitre)
        }
        console.log(this.fichesListe);
      });
    });
  }




}
