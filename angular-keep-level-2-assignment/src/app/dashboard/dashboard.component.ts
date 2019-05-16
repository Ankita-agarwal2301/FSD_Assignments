import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';
import { log } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  note: Note = new Note();
  notes: Array<Note> = [];
  constructor(private noteService: NotesService) { }

  takeNote() {
    console.log(this.note.title);
    this.notes.push(this.note);
    this.noteService.addNote(this.note).subscribe(data => {
    }, error => {
      console.log(error);

    });
  }
  ngOnInit() {
    this.noteService.getNotes().subscribe(data => {
      console.log(data);
      this.notes = data;
    }, error => {
      console.log(error);

    });
  }
}

