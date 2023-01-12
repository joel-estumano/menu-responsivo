import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { MenuControle } from '../menu-responsivo/menu-controle.model';
import { MenuDisplayService } from '../menu-responsivo/menu-display.service';
import { MenuVisivelService } from '../menu-responsivo/menu-visivel.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public open: boolean = false;
  public visivel: boolean = false;

  constructor(
    private menuDisplayService: MenuDisplayService,
    private menuVisivelService: MenuVisivelService
  ) {
    this.isDisplayValid().subscribe();
    this.isDisplayVisible().subscribe();
  }

  ngOnInit(): void {}

  openMenu() {
    if (this.visivel) {
      this.menuDisplayService.setOpen(!this.open);
    }else{
      alert('off canvas ...')
    }
  }

  isDisplayValid(): Observable<boolean> {
    return this.menuDisplayService.getSource().pipe(
      map((controle: MenuControle) => {
        if (controle.existe()) {
          this.open = true;
        } else {
          this.open = false;
        }
        return controle.existe();
      })
    );
  }

  isDisplayVisible(): Observable<boolean> {
    return this.menuVisivelService.getSource().pipe(
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
