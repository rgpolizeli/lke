import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import tutoriaisData from '../../../../assets/content/tutoriais.json';
import { Tutorial } from "../models/tutorial.interface";

@Injectable({providedIn: 'root'})
export class TutorialItemService {

    getTutoriais() : Observable<Tutorial[]> {
        return of(tutoriaisData || []);
    }

    getTutorial(tutorialId: number): Observable<Tutorial | undefined> {
        return of(tutoriaisData.find((tutorial) => tutorialId === tutorial.id));
    }
}