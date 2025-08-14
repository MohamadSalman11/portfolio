import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private languageSubject: BehaviorSubject<boolean>;

  constructor() {
    const saved = localStorage.getItem('isDE');
    this.languageSubject = new BehaviorSubject<boolean>(
      saved !== null ? JSON.parse(saved) : true
    );
  }

  getLanguage() {
    return this.languageSubject.asObservable();
  }

  setLanguage(de: boolean) {
    localStorage.setItem('isDE', JSON.stringify(de));
    this.languageSubject.next(de);
  }

  getCurrentLanguage(): boolean {
    return this.languageSubject.value;
  }
}
