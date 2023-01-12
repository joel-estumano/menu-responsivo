import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuControleService {
  private subjectMenuOpen: BehaviorSubject<boolean>;
  private subjectVisibilidade: BehaviorSubject<boolean>;

  constructor() {
    this.subjectMenuOpen = new BehaviorSubject<boolean>(true);
    this.subjectVisibilidade = new BehaviorSubject<boolean>(true);
  }

  public menuOpen(open: boolean) {
    this.subjectMenuOpen.next(open);
  }

  public menuVisible(visivel: boolean) {
    this.subjectVisibilidade.next(visivel);
  }

  public getSourceMenuOpen(): Observable<boolean> {
    return this.subjectMenuOpen.asObservable();
  }

  public getSourceVisibilidade(): Observable<boolean> {
    return this.subjectVisibilidade.asObservable();
  }
}
