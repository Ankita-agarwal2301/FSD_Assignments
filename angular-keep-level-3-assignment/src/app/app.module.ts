import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditNoteOpenerComponent } from './edit-note-opener/edit-note-opener.component';
import { EditNoteViewComponent } from './edit-note-view/edit-note-view.component';
import { HeaderComponent } from './header/header.component';
import { ListViewComponent } from './list-view/list-view.component';
import { LoginComponent } from './login/login.component';
import { NoteComponent } from './note/note.component';
import { NoteTakerComponent } from './note-taker/note-taker.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { NotesService } from './services/notes.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { HttpClientModule } from '@angular/common/http';
import { RouterService } from './services/router.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanActivateRouteGuard],
    children: [
      {
        path: 'view/noteview',
        component: NoteViewComponent
      },
      {
        path: 'view/listview',
        component: ListViewComponent,
      }
      ,
      {
        path: '',
        redirectTo: 'view/noteview',
        pathMatch: 'full'
      },
      {
        path: 'note/:noteId/edit',
        component: EditNoteOpenerComponent,
        outlet: 'noteEditOutlet'
      }
    ]
  }
];
@NgModule({
  declarations: [AppComponent, DashboardComponent,
    EditNoteOpenerComponent, EditNoteViewComponent, HeaderComponent,
    ListViewComponent, LoginComponent, NoteComponent, NoteTakerComponent, NoteViewComponent],
  imports: [MatInputModule, MatDialogModule,
    MatCardModule, MatExpansionModule, HttpClientModule,
    BrowserAnimationsModule, RouterModule.forRoot(routes), FormsModule,
    ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatToolbarModule],
  providers: [AuthenticationService, NotesService,
    CanActivateRouteGuard, RouterService],
  bootstrap: [AppComponent],
  entryComponents: [EditNoteViewComponent]
})

export class AppModule { }
