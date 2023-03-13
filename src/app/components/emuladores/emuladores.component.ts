import { Component } from '@angular/core';
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
  readonly devices = [
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
  emuladores: Emulador[] = emuladoresData;
  filterDevice: string = '';

  showEmulador(emulador: Emulador): boolean {
    return !this.filterDevice || emulador.devices.includes(this.filterDevice);
  }
}
