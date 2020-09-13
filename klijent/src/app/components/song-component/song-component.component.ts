import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SongService } from 'src/app/service/song.service';
import { Song } from 'src/app/songModel';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-song-component',
  templateUrl: './song-component.component.html',
  styleUrls: ['./song-component.component.css']
})
export class SongComponentComponent implements OnInit, OnDestroy {

  @Input() song: Song;

  public songs: Observable<Song[]>;
  private activeSub: Subscription[] = [];

  public noIncrement = false;


  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songs = this.songService.getSongs("count");

  }

  public incrementCount(id: string) {

//    window.alert(id);
    const body = {
      _id: id
    }
    const sub = this.songService.incCount(body).subscribe((param) =>{
      console.log(param);
      this.noIncrement = true;
      
    });
    this.activeSub.push(sub);
    this.noIncrement = false;
    
  }



  ngOnDestroy(){
    this.activeSub.forEach((param) => param.unsubscribe());
  }

}
