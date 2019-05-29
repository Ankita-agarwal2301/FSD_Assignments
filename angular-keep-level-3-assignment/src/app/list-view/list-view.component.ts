import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';
import { log } from 'util';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  notStartedNotes: Array<Note> = [];
  startedNotes: Array<Note> = [];
  completedNotes: Array<Note> = [];

  constructor(private notesService: NotesService) { }
  notes: Array<Note>;
  ngOnInit() {
    this.notesService.getNotes().subscribe(data => {
      console.log(data);
      this.notes = data;
      this.notes.forEach(element => {
        if (element.state === 'not-started') {
          this.notStartedNotes.push(element);
        } else if (element.state === 'started') {
          this.startedNotes.push(element);
        } else if (element.state === 'completed') {
          this.completedNotes.push(element);
        }
      });
    },
      error => {
        console.log(error);
      });
  }
}
