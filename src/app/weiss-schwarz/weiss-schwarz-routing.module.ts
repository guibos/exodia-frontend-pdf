import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InsertListComponent} from "./components/deck-inserts/insert-list/insert-list.component";
import {AlbumComponent} from "./components/album/album/album.component";

const routes: Routes = [
  {
    path: "weiss-schwarz/inserts",
    component: InsertListComponent
  },
  {
    path: "weiss-schwarz/album",
    component: AlbumComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WeissSchwarzRoutingModule {
}
