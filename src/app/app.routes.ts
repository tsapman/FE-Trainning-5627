import { Routes } from '@angular/router';
import { FirstAlbumComponent } from './first-album/first-album.component';
import { SecondAlbumComponent } from './second-album/second-album.component';

export const routes: Routes = [
    {path: 'firstAlbum/:albumId', component: FirstAlbumComponent},
    {path: 'secondAlbum/:albumId', component : SecondAlbumComponent}
    
];
