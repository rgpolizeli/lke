import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmuladoresComponent } from './components/emuladores/emuladores.component';
import { HomeComponent } from './components/home/home.component';
import { RomsComponent } from './components/roms/roms.component';
import { TutoriaisItemComponent } from './components/tutoriais/components/tutoriais-item/tutoriais-item.component';
import { TutorialItemResolver } from './components/tutoriais/resolvers/tutorial-item.resolver';
import { TutoriaisComponent } from './components/tutoriais/tutoriais.component';

const routes: Routes = [
  {path: 'emuladores', component: EmuladoresComponent},
  {path: 'roms', component: RomsComponent},
  {path: 'tutoriais', component: TutoriaisComponent},
  {path: 'tutoriais/:id', component: TutoriaisItemComponent, resolve: { tutorialItem: TutorialItemResolver }},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TutorialItemResolver]
})
export class AppRoutingModule { }
