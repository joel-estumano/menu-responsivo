import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuControleService {
  private subjectMenuOpen = new Subject<boolean>();
  private subjectVisibilidade = new Subject<boolean>();

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
