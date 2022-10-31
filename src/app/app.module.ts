import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmuladoresComponent } from './components/emuladores/emuladores.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TutoriaisComponent } from './components/tutoriais/tutoriais.component';
import { TutoriaisListaItemComponent } from './components/tutoriais/components/tutoriais-lista-item/tutoriais-lista-item.component';
import { TutoriaisItemComponent } from './components/tutoriais/components/tutoriais-item/tutoriais-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmuladoresComponent,
    TutoriaisComponent,
    TutoriaisListaItemComponent,
    TutoriaisItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
