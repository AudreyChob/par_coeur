import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFichesPage } from './modal-fiches.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFichesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFichesPageRoutingModule {}
