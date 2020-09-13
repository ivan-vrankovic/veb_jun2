import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SongComponentComponent } from './components/song-component/song-component.component';
import { NewSongComponent } from './components/new-song/new-song.component';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './components/playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    SongComponentComponent,
    NewSongComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
