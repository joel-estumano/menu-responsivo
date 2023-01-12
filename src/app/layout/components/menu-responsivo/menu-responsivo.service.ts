import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Displayers, MenuControle } from './menu-controle.model';

@Injectable({
  providedIn: 'root',
})
export class MenuResponsivoService {
  private menuControle = new BehaviorSubject<MenuControle>(
    new MenuControle(Displayers.flex)
  );

  constructor() {}

  public setOpen(isOpen: boolean) {
    if (!isOpen) {
      this.menuControle.next(new MenuControle(Displayers.none));
    } else {
      this.menuControle.next(new MenuControle(Displayers.flex));
    }
  }

  public setVisivel(visivel: boolean) {
    if (visivel) {
      this.menuControle.next(new MenuControle(Displayers.flex));
    } else {
      this.menuControle.next(new MenuControle(Displayers.flex, false));
    }
  }

  public getSource(): Observable<MenuControle> {
    return this.menuControle.asObservable();
  }
}
