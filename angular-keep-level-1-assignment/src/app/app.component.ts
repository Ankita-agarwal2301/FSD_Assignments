import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { HttpClient } from '@angular/common/http';
import { ErrorStateMatcher } from '@angular/material/core';
import { Note } from './note';
import { NotesService } from './notes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private notesService: NotesService) { }
  errMessage: string;

  note: Note = new Note();
  noteArray: Array<Note> = [];
  takeNote() {
    this.note.title = this.note.title;
    this.note.text = this.note.text;
    if (!this.note.title || !this.note.text) {
      this.errMessage = 'Title and Text both are required fields';
      return;
    }
    this.noteArray.push(this.note);
    this.notesService.addNote(this.note).subscribe(data => {
    }, error => {
      this.noteArray.pop();
      if (error.error instanceof ErrorEvent) {
        this.errMessage = error.error.message;
      }else {
        this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
      }
      error.errMessage = this.errMessage;
    });
    console.log(this.noteArray);
    this.note = new Note();
  }


  ngOnInit() {
    this.notesService.getNotes().subscribe(data => {
      document.getElementById('title').innerHTML = document.getElementById('title').innerHTML.trim();
      console.log(data);
      this.noteArray = data;
      this.noteArray.forEach(element => {

      });
    }, error => {

      if (error.error instanceof ErrorEvent) {
        this.errMessage = error.error.message;
      }else {
        console.log(error.error);
        this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
      }
      console.log(error);
      error.errMessage = this.errMessage;

    }
    );
  }
}
