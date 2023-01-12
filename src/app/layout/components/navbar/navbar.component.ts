import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MenuControleService } from '../menu-responsivo/menu-controle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public open$: Observable<boolean> = new Observable();
  public visivel$: Observable<boolean> = new Observable();

  constructor(private menuControleService: MenuControleService) {
    this.open$ = this.menuControleService.getSourceMenuOpen().pipe(
      map((open) => {
        return open;
      })
    );
    this.visivel$ = this.menuControleService.getSourceVisibilidade().pipe(
      map((visivel: boolean) => {
        return visivel;
      })
    );
  }

  ngOnInit(): void {}

  openMenu(menu: any) {
    if (menu.visivel) {
      this.menuControleService.setMenuOpen(!menu.open);
    } else {
      alert('off canvas ...');
    }
  }
}
