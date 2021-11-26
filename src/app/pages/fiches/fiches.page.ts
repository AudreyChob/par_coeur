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
    this.fichesListe = []
    this.afDB.list('Fiches').snapshotChanges(['child_added']).subscribe((resfiches)=> {
      // console.log(resfiches)
      resfiches.forEach(resfiche => {
        this.fichesListe.push(resfiche.payload.exportVal());
      });
      this.fichesListe.forEach((fiche, x) => {
        if(fiche['theme'] == this.theme){
          if(this.chapitresListe.length == 0){
            this.chapitresListe.push(new Chapitre(fiche['chapitre'], 0))
          }
          this.chapitresListe.forEach((chap) => {
            if(chap.nom != this.fichesListe[x]['chapitre']){
              this.chapitresListe.push(new Chapitre(fiche['chapitre'], 0))
            }
          });
          //console.log(this.chapitresListe)
        }
        this.filtreFiches(fiche['chapitre'])
      })
    })
  }

  filtreFiches(chapitre : Chapitre){
    this.fichesListe.forEach((fiche, x) => {
      console.log(chapitre)
        if(fiche['chapitre'] == chapitre.nom){
          chapitre.nb_fiches += 1
        }
    });
  }

  selectChapitre(chapitre : Chapitre){
    this.router.navigate(['revisions', chapitre.nom])
  }


}
