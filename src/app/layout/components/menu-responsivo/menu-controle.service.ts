import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuControleService {
  private subjectMenuOpen: BehaviorSubject<boolean>;
  private subjectVisibilidade = new Subject<boolean>();

  constructor() {
    this.subjectMenuOpen = new BehaviorSubject<boolean>(true);
  }

  public setMenuOpen(open: boolean) {
    this.subjectMenuOpen.next(open);
  }

  public setVisivel(visivel: boolean) {
    this.subjectVisibilidade.next(visivel);
  }

  public getSourceMenuOpen(): Observable<boolean> {
    return this.subjectMenuOpen.asObservable();
  }

  public getSourceVisibilidade(): Observable<boolean> {
    return this.subjectVisibilidade.asObservable();
  }
}
