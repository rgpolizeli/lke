import { Component } from '@angular/core';
import { filter } from 'rxjs';
import emuladoresData from '../../../assets/content/emuladores.json';

interface Emulador {
  id: number;
  name: string;
  devices: string[];
  download: string;
  tutorial: string;
}

@Component({
  selector: 'lke-emuladores',
  templateUrl: './emuladores.component.html',
  styleUrls: ['./emuladores.component.less'],
})
export class EmuladoresComponent {
  readonly devices = ['Playstation 2', 'Super Nintendo', 'Nintendo 64'];
  emuladores: Emulador[] = emuladoresData;
  filterDevice: string = '';

  showEmulador(emulador: Emulador): boolean {
    return !this.filterDevice || emulador.devices.includes(this.filterDevice);
  }
}
