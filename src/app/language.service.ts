import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private isDESubject = new BehaviorSubject<boolean>(true);
  getLanguage() {
    return this.isDESubject.asObservable();
  }

  setLanguage(isDE: boolean) {
    this.isDESubject.next(isDE);
  }
}
