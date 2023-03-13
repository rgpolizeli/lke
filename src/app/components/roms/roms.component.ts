import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RomSite } from './models/rom-site.interface';
import { RomsSitesService } from './services/roms.service';

@Component({
  selector: 'lke-roms',
  templateUrl: './roms.component.html',
  styleUrls: ['./roms.component.less'],
})
export class RomsComponent {
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
  romsSites$: Observable<RomSite[]> = 
  this.romsSitesService.getRomsSites()
  .pipe(
    map((romsSites) => romsSites.filter((romSite) => this.showRomSite(romSite)))
  );
  filterDevice: string = '';

  constructor(private romsSitesService: RomsSitesService) {}

  showRomSite(romSite: RomSite): boolean {
    return !this.filterDevice || romSite.devices.includes(this.filterDevice);
  }
}
