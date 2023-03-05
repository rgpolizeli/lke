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
  tutoriais$: Observable<Tutorial[]> = 
    this.tutorialService.getTutoriais()
    .pipe(
      map((tutoriais) => tutoriais.filter((tutorial) => this.showTutorial(tutorial)))
    );
  currentPage = 1;
  pageSize = 10;
  tutorialFilter: string = '';

  constructor(private tutorialService: TutorialService) {}

  private showTutorial(tutorial: Tutorial): boolean {
    return !this.tutorialFilter || tutorial.tags.includes(this.tutorialFilter);
  }
}
