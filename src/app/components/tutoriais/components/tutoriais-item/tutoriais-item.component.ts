import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tutorial } from '../../models/tutorial.interface';

@Component({
  selector: 'lke-tutoriais-item',
  templateUrl: './tutoriais-item.component.html',
  styleUrls: ['./tutoriais-item.component.less'],
})
export class TutoriaisItemComponent implements OnInit, AfterViewInit{
  tutorial: Tutorial | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tutorial = this.route.snapshot.data['tutorialItem'];
  }

  ngAfterViewInit(): void {
    this.mountContent();
  }

  private mountContent() {
    this.tutorial?.htmlContent.forEach(content => {
      const tag = Object.keys(content)[0];
      const value = content[tag];
      const element = document.createElement(tag);
      element.innerHTML = value;
      document?.getElementById('content')?.appendChild(element);
    })
  }

}
