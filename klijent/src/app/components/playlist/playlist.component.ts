import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/service/song.service';
import { Song } from 'src/app/songModel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  public activeSub: Subscription[] = [];

  public songss: Song[] = [];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
  }

  sortSongsBy(event) {

    const sortParam = event.target.value;
    //    window.alert(sortParam);
    if (sortParam === 'title' || sortParam === 'artist' || sortParam === 'count') {
      const sub = this.songService.getSongs(sortParam).subscribe((songs: Song[]) => {
        this.songss = songs;
        console.log(this.songss);
      })
      this.activeSub.push(sub);
    }
  }

  ngOnDestroy() {
    this.activeSub.forEach((param) => param.unsubscribe());
  }

}
