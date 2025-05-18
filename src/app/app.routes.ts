import { Routes } from '@angular/router';
import { FirstAlbumComponent } from './first-album/first-album.component';
import { SecondAlbumComponent } from './second-album/second-album.component';

export const routes: Routes = [
    {path: 'firstAlbum', component: FirstAlbumComponent},
    {path: 'secondAlbum', component : SecondAlbumComponent}
];
