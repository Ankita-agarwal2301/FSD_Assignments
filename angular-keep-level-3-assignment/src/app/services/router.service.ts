import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'util';

@Injectable()
export class RouterService {
  constructor(private router: Router) {

  }
  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }

  routeToLogin() {

    this.router.navigate(['login']);
  }

  routeToEditNoteView(noteId) {
    this.router.navigate(['dashboard',
      {
        outlets: {
          noteEditOutlet: ['note', noteId, 'edit']
        }
      }
    ]);
  }

  routeBack() {

  }

  routeToNoteView() {
    this.router.navigate(['dashboard', 'view', 'noteview']);
  }

  routeToListView() {
    this.router.navigate(['dashboard', 'view', 'listview']);
  }
}
