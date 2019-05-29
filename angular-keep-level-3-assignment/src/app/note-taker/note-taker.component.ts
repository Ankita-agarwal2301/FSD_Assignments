import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { log } from 'util';
import { Note } from '../note';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent {
  note: Note = new Note();
  errMessage: String;
  constructor(private noteService: NotesService) {
  }
  save() {
    if (!this.note.title || !this.note.text) {
      this.errMessage = 'Title and Text both are required fields';
      return;
    }
    this.noteService.addNote(this.note).subscribe(data => {
    }, error => {
      this.errMessage = 'Http failure response for http://localhost:3000/api/v1/notes: 404 Not Found';
    });
  }
}
