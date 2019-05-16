import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NotesService } from './services/notes.service';
import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate : [CanActivateRouteGuard]
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent,

  }
];
@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent, DashboardComponent],
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
  providers: [NotesService, AuthenticationService, RouterService],
  bootstrap: [AppComponent]
})

export class AppModule { }
