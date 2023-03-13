import { Component} from '@angular/core';
import { map, Observable } from 'rxjs';
import { Tutorial } from './models/tutorial.interface';
import { TutorialItemResolver } from './resolvers/tutorial-item.resolver';
import { TutorialItemService, TutorialItemService as TutorialService } from './services/tutorial-item.service';

@Component({
  selector: 'lke-tutoriais',
  templateUrl: './tutoriais.component.html',
  styleUrls: ['./tutoriais.component.less'],
  providers: [TutorialItemService]
})

export class TutoriaisComponent {
  readonly tags = [
    'Atari 2600',
    'GameCube',
    'Nintendo Wii',
    'Nintendo DS',
    'Game Boy',
    'PSP',
    'Playstation 1',
    'Neo Geo',
    'Master System',
    'Mega Drive',
    'Nintendo 8 bits', 
    'Playstation 2', 
    'Super Nintendo', 
    'Nintendo 64',
    'Xbox'
  ];

  tutoriais$: Observable<Tutorial[]> = 
    this.tutorialService.getTutoriais()
    .pipe(
      map((tutoriais) => tutoriais.filter((tutorial) => this.showTutorial(tutorial)))
    );
  currentPage = 1;
  pageSize = 10;
  tutorialFilter: string = '';

  constructor(private tutorialService: TutorialService) {}

  showTutorial(tutorial: Tutorial): boolean {
    debugger;
    return !this.tutorialFilter || tutorial.tags.includes(this.tutorialFilter);
  }
}
