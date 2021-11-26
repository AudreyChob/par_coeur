import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Fiche } from 'src/app/models/fiche';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.page.html',
  styleUrls: ['./revision.page.scss'],
})
export class RevisionPage implements OnInit {

  fichesListe : Fiche[] = [];
  filtredFiches : Fiche[];
  chapitre : string;

  constructor(
    public route : ActivatedRoute,
    public router : Router,
    public afDB: AngularFireDatabase,
  ) {
    this.getAllRevisionFiches()
  }
  ngOnInit() {
    this.chapitre = this.route.snapshot.params['chapitre']
  }
  ionViewDidEnter(){
  }
  //
  getAllRevisionFiches(){
    this.fichesListe = []
    this.filtredFiches = []
    this.afDB.list('Fiches').snapshotChanges(['child_added']).subscribe(fiches=> {
      // fiches

      fiches.forEach(fiche => {
        this.fichesListe.push(fiche.payload.exportVal());
      });
      this.filtredFiches = this.fichesListe.filter(f => f['chapitre'] == this.chapitre)
      console.log(this.filtredFiches)
    });
  }

}
