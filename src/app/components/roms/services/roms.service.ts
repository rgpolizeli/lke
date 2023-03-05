import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import romsSitesData from '../../../../assets/content/roms.json';
import { RomSite } from "../models/rom-site.interface";

@Injectable({providedIn: 'root'})
export class RomsSitesService {
    getRomsSites() : Observable<RomSite[]> {
        return of(romsSitesData || []);
    }
}