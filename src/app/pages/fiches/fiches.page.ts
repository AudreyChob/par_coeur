import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Chapitre } from 'src/app/models/chapitre';
import { Fiche } from 'src/app/models/fiche';
import { ModalFichesPage } from '../modals/modal-fiches/modal-fiches.page';


@Component({
  selector: 'app-fiches',
  templateUrl: './fiches.page.html',
  styleUrls: ['./fiches.page.scss'],
})
export class FichesPage implements OnInit {
  theme : string = "";
  chapitresListe : Chapitre[] = [];
  fichesListe : Fiche[] = [];
  constructor(
    public route : ActivatedRoute,
    public router : Router,
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
    this.chapitresListe = []
    this.fichesListe = []
    return await modal.present();
  }

  getFiches(){
    this.afDB.list('Fiches').snapshotChanges(['child_added']).subscribe(fiches=> {
      fiches.forEach(fiche => {
        this.fichesListe.push(fiche.payload.exportVal());
        if(this.chapitresListe.length == 0) {
          this.chapitresListe.push(new Chapitre(fiche.payload.exportVal().chapitre, 0))
        }
        this.chapitresListe.forEach(chap => {
          if(chap.nom != fiche.payload.exportVal().chapitre){
            this.chapitresListe.push(new Chapitre(fiche.payload.exportVal().chapitre, 0))
          }
        });
        this.filtreFiches(fiche.payload.exportVal().chapitre)
      });
    });
  }

  filtreFiches(chapitre : Chapitre){
    this.chapitresListe.forEach((chapitre, x) => {
      if(this.fichesListe[x]['chapitre'] == chapitre.nom){
        chapitre.nb_fiches += 1
      }
    });
  }

  selectChapitre(chapitre : Chapitre){
    this.router.navigate(['revisions', chapitre.nom])
  }


}
