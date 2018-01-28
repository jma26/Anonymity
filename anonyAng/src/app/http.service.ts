import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  getNotes() {
    return this._http.get('/note');
  }
  newNote(note) {
    console.log(note);
    return this._http.post('/note', note);
  }
}
