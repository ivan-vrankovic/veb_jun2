import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistComponent } from './components//playlist/playlist.component';
import { SongComponentComponent } from './components/song-component/song-component.component';
import { NewSongComponent } from './components/new-song/new-song.component';

const routes: Routes = [
  { path: '', component: PlaylistComponent },
  { path: 'song', component: SongComponentComponent},
  { path: 'scrobble', component: NewSongComponent },
 // { path: ':paramSong', component: SongComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
