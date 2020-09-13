import { Injectable } from '@angular/core';
import { Song } from '../songModel';
import { HttpErrorHandler } from '../error/http-error-handler-model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private readonly url = "http://localhost:3000/api/songs/";

  constructor(private http: HttpClient) { }

  public getSongs(sortBy: string): Observable<Song[]>{
    return this.http.get<Song[]>(this.url + sortBy);
  }

  public incCount(body): Observable<Song>{
    return this.http.patch<Song>(this.url, body);
  }

  public addsong(body) :Observable<any> {
    return this.http.put<Song>(this.url, body);
  }
}
