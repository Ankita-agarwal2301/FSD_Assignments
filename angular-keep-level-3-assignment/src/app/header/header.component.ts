import { Component } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNoteView = true;
  constructor(private router: RouterService) { }
  noteView() {
    this.isNoteView = true;
    this.router.routeToNoteView();
  }
  listView() {
    this.isNoteView = false;
    this.router.routeToListView();
  }
}
