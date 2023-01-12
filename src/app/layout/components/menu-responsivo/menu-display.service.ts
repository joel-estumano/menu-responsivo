import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Displayers, MenuControle } from './menu-controle.model';

@Injectable({
  providedIn: 'root',
})
export class MenuDisplayService {
  private menu = new MenuControle(Displayers.flex);

  private menuControle = new BehaviorSubject<MenuControle>(this.menu);

  constructor() {}

  public setOpen(isOpen: boolean) {
    if (isOpen) {
      this.menuControle.next(this.menu.setDisplay(Displayers.flex));
    } else {
      this.menuControle.next(this.menu.setDisplay(Displayers.none));
    }
  }

  public getSource(): Observable<MenuControle> {
    return this.menuControle.asObservable();
  }
}
