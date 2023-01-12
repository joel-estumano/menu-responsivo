import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.open$ = this.menuControleService.getSourceMenuOpen().pipe();
    this.visivel$ = this.menuControleService.getSourceVisibilidade().pipe();
  }

  ngOnInit(): void {}

  openMenu(menu: any) {
    this.menuControleService.menuOpen(!menu.open);
  }
}
