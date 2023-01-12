import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MenuControleService } from '../menu-responsivo/menu-controle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public open: boolean = false;
  public visivel: boolean = false;

  constructor(private menuControleService: MenuControleService) {
    this.isMenuOpen().subscribe();
    this.isMenuVisivel().subscribe();
  }

  ngOnInit(): void {}

  openMenu() {
    if (this.visivel) {
      this.menuControleService.setMenuOpen(!this.open);
    } else {
      alert('off canvas ...');
    }
  }

  isMenuOpen(): Observable<boolean> {
    return this.menuControleService.getSourceMenuOpen().pipe(
      map((controle) => {
        if (controle) {
          this.open = true;
        } else {
          this.open = false;
        }
        return controle;
      })
    );
  }

  isMenuVisivel(): Observable<boolean> {
    return this.menuControleService.getSourceVisibilidade().pipe(
      map((visivel: boolean) => {
        if (visivel) {
          this.visivel = true;
        } else {
          this.visivel = false;
        }
        return visivel;
      })
    );
  }
}
