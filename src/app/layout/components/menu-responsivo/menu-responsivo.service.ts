import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuResponsivoService {

  private subject = new Subject<boolean>();
  
  constructor() { }
  
  public setOpen(isOpen: boolean) {
    this.subject.next(isOpen);
  }

  public getSource(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
