import { Component, Input } from '@angular/core';
import { Tutorial } from '../../models/tutorial.interface';

@Component({
  selector: 'lke-tutoriais-lista-item',
  templateUrl: './tutoriais-lista-item.component.html',
  styleUrls: ['./tutoriais-lista-item.component.less']
})
export class TutoriaisListaItemComponent {
  @Input() tutorial!: Tutorial
}
