import { Injectable } from '@angular/core';
import { Note } from '../note';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { tap } from 'rxjs/operators';
import { log } from 'util';

@Injectable()
export class NotesService {
  constructor(private http: HttpClient, private auth: AuthenticationService) {
    this.notes = [];
    this.notesSubject = new BehaviorSubject(this.notes);
  }
  notes: Array<Note>;
  notesSubject: BehaviorSubject<Array<Note>>;

  fetchNotesFromServer() {
    return this.http.get<Array<Note>>('http://localhost:3000/api/v1/notes',
      { headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.getBearerToken()}`) })
      .subscribe(data => {
        this.notes = data;
        this.notesSubject.next(this.notes);
      },error=>{});
  }

  getNotes(): BehaviorSubject<Array<Note>> {
    return this.notesSubject;
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>('http://localhost:3000/api/v1/notes', note,
      { headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.getBearerToken()}`) })
      .pipe(tap(newNote => {
        this.notes.push(newNote);
        this.notesSubject.next(this.notes);
      }));
  }

  editNote(note: Note): Observable<Note> {
    return this.http.put<Note>(`http://localhost:3000/api/v1/notes/${note.id}`, note,
      { headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.getBearerToken()}`) })
      .pipe(tap(newNote => {
        this.notes.forEach(element => {
          if (element.id === note.id) {
            Object.assign(element, note);
            this.notesSubject.next(this.notes);
          }
        });
      }));
  }
  getNoteById(noteId): Note {
    const notedata = this.notes.find(noteitem => noteitem.id === noteId);
    return Object.assign({}, notedata);
  }
}
