import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { NotesService } from './notes.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserAnimationsModule, MatToolbarModule, MatExpansionModule, FormsModule, MatCardModule, HttpClientModule],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
