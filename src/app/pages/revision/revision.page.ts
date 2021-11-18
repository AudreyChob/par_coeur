import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.page.html',
  styleUrls: ['./revision.page.scss'],
})
export class RevisionPage implements OnInit {

  fichesListe = [];
  chapitre : string;

  constructor(
    public route : ActivatedRoute,
    public router : Router,
    public afDB: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.chapitre = this.route.snapshot.params['chapitre']
  }
  //
  // getAllRevisionFiches(){
  //   this.afDB.list('Fiches').snapshotChanges(['child_added']).subscribe(fiches=> {
  //     this.fichesListe = fiches;
  //     fiches.forEach(fiche => {
  //       console.log(fiche.payload.exportVal().front);
  //       console.log(fiche.payload.exportVal().back);
  //     });
  //   });
  // }

}
