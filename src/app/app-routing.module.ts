import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmuladoresComponent } from './components/emuladores/emuladores.component';
import { TutoriaisComponent } from './components/tutoriais/tutoriais.component';

const routes: Routes = [
  {path: 'emuladores', component: EmuladoresComponent},
  {path: 'tutoriais', component: TutoriaisComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
