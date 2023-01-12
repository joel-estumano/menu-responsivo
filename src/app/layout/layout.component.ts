import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';
import { MenuControleService } from './components/menu-responsivo/menu-controle.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  public visivel$: Observable<{ visivel: boolean }> = new Observable();

  constructor(private readonly mControlService: MenuControleService) {
    this.visivel$ = this.mControlService.getSourceVisibilidade().pipe(
      map((visivel: boolean) => {
        return { visivel: visivel };
      }),
      debounceTime(250),
      distinctUntilChanged()
    );
  }
}
