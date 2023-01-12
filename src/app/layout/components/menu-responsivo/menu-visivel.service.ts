import { Injectable } from '@angular/core';
import {  Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuVisivelService {
  
  private subject = new Subject<boolean>;

  constructor() {}


  public setVisivel(visivel: boolean) {
    if (visivel) {
      this.subject.next(true);
    } else {
      this.subject.next(false);
    }
  }

  public getSource(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
