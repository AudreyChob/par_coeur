import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Fiche } from 'src/app/models/fiche';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.page.html',
  styleUrls: ['./revision.page.scss'],
})
export class RevisionPage implements OnInit {

  fichesListe : Fiche[] = [];
  filtredFiches : Fiche[];
  chapitre : string;
  currentCard : Fiche;
  randomCard : number;
  note : number = 0;
  nbFiche : number;
  constructor(
    public route : ActivatedRoute,
    public router : Router,
    public afDB: AngularFireDatabase,
    public alertCtl : AlertController,
  ) {
    this.getAllRevisionFiches()
  }
  ngOnInit() {
    this.chapitre = this.route.snapshot.params['chapitre']
  }
  ionViewDidEnter(){
    console.log(this.filtredFiches)
    let interval = setInterval(()=>{
      if(this.filtredFiches != []){
        this.nbFiche = this.filtredFiches.length
        let ficheIndex = this.getRandomCard()
        this.filtredFiches.indexOf(this.filtredFiches[ficheIndex])
        this.currentCard = this.filtredFiches[ficheIndex]
        this.filtredFiches.slice(ficheIndex, 1)
        console.log(this.currentCard)
      }
      if(this.currentCard){
        clearInterval(interval)
      }
    },500)
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

  getRandomCard(){
    console.log(Math.floor(Math.random() * this.filtredFiches.length))
    return this.randomCard = Math.floor(Math.random() * this.filtredFiches.length);
  }

  async changeCard(note : boolean){
    let ficheIndex = this.getRandomCard()
    this.filtredFiches.indexOf(this.filtredFiches[ficheIndex])
    this.currentCard = this.filtredFiches[ficheIndex]
    this.filtredFiches.splice(ficheIndex, 1)
    console.log("this.filtredFiches" , this.filtredFiches.length)
    if(note){
      this.note += 1
    }
    if(this.filtredFiches.length == 0){
      let alerte = await this.alertCtl.create({
        header : "Vous avez terminé le chapitre : " + this.chapitre,
        message : "Votre note : " + this.note + "/" + this.nbFiche,
        buttons : [
          {
            text : "ok",
            handler: () => {
              this.note = 0
              this.router.navigate(['themes'])
              console.log(this.filtredFiches)
            }
          }
        ]
      });
      alerte.present();
    }

  }

}
