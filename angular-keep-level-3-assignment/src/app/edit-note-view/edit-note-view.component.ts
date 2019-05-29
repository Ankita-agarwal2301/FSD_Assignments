import { Component, Inject, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';
import { log } from 'util';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note-view.component.html',
  styleUrls: ['./edit-note-view.component.css']
})
export class EditNoteViewComponent implements OnInit {
  note: Note = new Note();
  states: Array<string> = ['not-started', 'started', 'completed'];
  errMessage: string;
  data: any;
  constructor(private noteService: NotesService,
    @Inject(MAT_DIALOG_DATA) private dataa: any,
    private dialog: MatDialogRef<EditNoteViewComponent>) { }
  ngOnInit() {
    this.note = this.noteService.getNoteById(this.dataa.noteId);
  }
  onSave() {
    this.noteService.editNote(this.note).subscribe(data => {
      this.dialog.close();
    }, error => {
      this.errMessage = 'Http failure response for http://localhost:3000/api/v1/notes: 404 Not Found';
    });
  }
}
