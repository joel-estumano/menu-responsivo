import { Component, OnInit } from '@angular/core';
import { MenuResponsivoService } from '../menu-responsivo/menu-responsivo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
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

  ngOnInit(): void {}

  openMenu() {
    this.menuResponsivoService.setOpen(this.open!);
  }
}
