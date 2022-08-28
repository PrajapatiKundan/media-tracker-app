import { MediaItemListComponent } from './components/media-item-list/media-item-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';

const routes: Routes = [
  {
    path: 'add',
    loadChildren: () =>
      import('./new-item/new-item.module').then((m) => m.NewItemModule),
  },
  { path: 'edit', component: EditModalComponent },
  { path: ':medium', component: MediaItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
