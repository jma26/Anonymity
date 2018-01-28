import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  note: any;
  errors: any;
  anony_notes: any;
  date: any;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.note = {
      notes: ''
    }
    this.getNotes();
  }
  getNotes() {
    this._httpService.getNotes().subscribe(data => {
      this.anony_notes = data;
    })
  }
  newNote() {
    this._httpService.newNote(this.note).subscribe(data => {
      if (data['errors']) {
        this.errors = data['message'];
      } else {
        this.anony_notes = data;
      }

    })
  }

}
