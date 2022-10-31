import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lke-tutoriais',
  templateUrl: './tutoriais.component.html',
  styleUrls: ['./tutoriais.component.less'],
})
export class TutoriaisComponent {
  currentPage = 1;
  pageSize = 10;
  items = [1, 2, 3, 4];
}
