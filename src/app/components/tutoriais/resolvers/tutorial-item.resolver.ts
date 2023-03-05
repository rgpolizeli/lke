import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Tutorial } from "../models/tutorial.interface";
import { TutorialItemService } from "../services/tutorial-item.service";

@Injectable()
export class TutorialItemResolver implements Resolve<any> {
  constructor(private tutorialItemService: TutorialItemService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Tutorial | undefined> {
    const tutorialId = route.paramMap.get('id') || '-1';
    const tutorialIdAsNumber = Number.parseInt(tutorialId);
    return this.tutorialItemService.getTutorial(tutorialIdAsNumber);
  }
}