import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { MenuControleService } from './menu-controle.service';

@Component({
  selector: 'app-menu-responsivo',
  templateUrl: './menu-responsivo.component.html',
  styleUrls: ['./menu-responsivo.component.css'],
})
export class MenuResponsivoComponent implements AfterViewInit {
  @ViewChild('menu') menu: ElementRef = {} as ElementRef;
  private readonly menuClassico = 'd-flex app-menu-responsivo p-4';
  private readonly menuOffcanvas = 'd-flex offcanvas-collapse p-4';

  public open$: Observable<boolean> = new Observable();
  public visivel$: Observable<boolean> = new Observable();

  private open: boolean = true;
  public visivel: boolean = true;

  @HostListener('window:load', ['$event'])
  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])
  onWindowScroll(event?: any) {
    if (this.elementRef.nativeElement.offsetParent?.className) {
      this.mControlService.menuVisible(true);
    } else {
      this.mControlService.menuVisible(false);
    }
  }

  constructor(
    private mControlService: MenuControleService,
    private elementRef: ElementRef,
    private renderer2: Renderer2
  ) {
    this.open$ = this.mControlService.getSourceMenuOpen().pipe(
      map((open: boolean) => {
        return open;
      })
    );
    this.visivel$ = this.mControlService.getSourceVisibilidade().pipe(
      map((visivel: boolean) => {
        this.visivel = visivel;
        return visivel;
      })
    );
  }

  ngAfterViewInit(): void {
    this.mControlService.getSourceMenuOpen().subscribe((isOpen) => {
      this.open = isOpen;

      if (this.open && this.visivel) {
        this.menuClassico.split(' ').forEach((className: string) => {
          this.renderer2.addClass(this.menu.nativeElement, className);
        });
      } else {
        this.menuClassico.split(' ').forEach((className: string) => {
          this.renderer2.removeClass(this.menu.nativeElement, className);
        });
      }

    });
  }

  menuOpen(menu: any) {
    this.mControlService.menuOpen(!menu.open);
  }
}
