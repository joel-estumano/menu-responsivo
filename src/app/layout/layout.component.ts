import { Component } from '@angular/core';
import { MenuResponsivoService } from './components/menu-responsivo/menu-responsivo.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  public open: boolean = false;

  constructor(private readonly menuResponsivoService: MenuResponsivoService) {
    this.menuResponsivoService.getSource().subscribe((isOpen) => {
      if (isOpen) {
        this.open = false;
      } else {
        this.open = true;
      }
    });
  }
}