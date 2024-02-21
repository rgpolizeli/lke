import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Tutorial } from '../../models/tutorial.interface';

@Component({
  selector: 'lke-tutoriais-item',
  templateUrl: './tutoriais-item.component.html',
  styleUrls: ['./tutoriais-item.component.less'],
})
export class TutoriaisItemComponent implements OnInit, AfterViewInit{
  tutorial: Tutorial | undefined;
  scriptAnuncio = this.sanitizer.bypassSecurityTrustHtml('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0779487197855100" crossorigin="anonymous"></script><ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-0779487197855100" data-ad-slot="5179886865"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

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
