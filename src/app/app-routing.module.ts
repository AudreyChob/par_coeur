import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomePage} from 'src/app/home/home.page'
import { FichesPage } from './pages/fiches/fiches.page';
import { RevisionPage } from './pages/revision/revision.page';
import { ThemesPage } from './pages/themes/themes.page';

const routes: Routes = [

  {
    path: '',
    component : ThemesPage
  },
  {
    path: 'themes',
    component : ThemesPage
  },
  {
    path: 'fiches/:theme',
    component : FichesPage
  },
  {
    path: 'revisions/:chapitre',
    component : RevisionPage
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
