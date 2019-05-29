import { Component, Input } from '@angular/core';
import { Note } from '../note';
import { RouterService } from '../services/router.service';
import { log } from 'util';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input()
  note: Note = new Note();
  constructor(private routerService: RouterService) { }

  edit() {
    console.log('edoittttttttttttttttttttttttttt');

    this.routerService.routeToEditNoteView(this.note.id);
  }

}
