import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from '../note';
import { NullTemplateVisitor } from '@angular/compiler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { log } from 'util';


@Injectable()
export class NotesService {

  constructor(private http: HttpClient, private auth: AuthenticationService) {

  }

  getNotes(): Observable<Array<Note>> {
    return this.http.get<Array<Note>>('http://localhost:3000/api/v1/notes', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.getBearerToken()}`)
    });
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>('http://localhost:3000/api/v1/notes', note, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.getBearerToken()}`)
    });
  }

}
