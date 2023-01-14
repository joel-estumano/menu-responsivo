import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { distinctUntilChanged, map, Observable } from 'rxjs';
import { MenuControleService } from './menu-controle.service';

@Component({
  selector: 'app-menu-responsivo',
  templateUrl: './menu-responsivo.component.html',
  styleUrls: ['./menu-responsivo.component.css'],
})
export class MenuResponsivoComponent implements AfterViewInit {
  @ViewChild('menu') menu: ElementRef = {} as ElementRef;
  private readonly menuClassico = 'd-flex app-menu-responsivo';
  private readonly menuOffcanvas = 'd-flex menu-offcanvas';

  public open$: Observable<boolean> = new Observable();
  public visivel$: Observable<boolean> = new Observable();

  private visivel: boolean = false;

  @HostListener('window:load', ['$event'])
  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])
  onWindowScroll(event?: any) {
    if (event) {
      if (
        this.elementRef.nativeElement.offsetParent?.offsetWidth === this.menu.nativeElement.offsetWidth ||
        this.elementRef.nativeElement.offsetParent?.offsetWidth > 768
      ) {
        this.mControlService.menuVisible(true);
        this.mControlService.menuOpen(true);
      } else {
        this.mControlService.menuVisible(false);
        this.mControlService.menuOpen(false);
      }
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
      }),
      distinctUntilChanged()
    );
  }

  ngAfterViewInit(): void {

    this.renderer2.listen(this.menu.nativeElement, 'click', (event: any) => {
      event.stopPropagation();
      if (!event.defaultPrevented && !event.target.offsetParent) {
        this.onClickBackdrop()
      }
    });


    this.onWindowScroll();
    this.mControlService.getSourceMenuOpen().subscribe((isOpen) => {
      if (this.visivel) {
        this.menuOffcanvas.split(' ').forEach((className: string) => {
          this.renderer2.removeClass(this.menu.nativeElement, className);
        });
        if (isOpen) {
          this.menuClassico.split(' ').forEach((className: string) => {
            this.renderer2.addClass(this.menu.nativeElement, className);
          });
        } else {
          this.menuClassico.split(' ').forEach((className: string) => {
            this.renderer2.removeClass(this.menu.nativeElement, className);
          });
        }
      } else {
        this.menuClassico.split(' ').forEach((className: string) => {
          this.renderer2.removeClass(this.menu.nativeElement, className);
        });
        if (isOpen) {
          this.menuOffcanvas.split(' ').forEach((className: string) => {
            this.renderer2.addClass(this.menu.nativeElement, className);
          });
        } else {
          this.menuOffcanvas.split(' ').forEach((className: string) => {
            this.renderer2.removeClass(this.menu.nativeElement, className);
          });
        }
      }
    });
  }

  menuOpen(menu: any) {
    this.mControlService.menuOpen(!menu.open);
  }

  onClickBackdrop() {
    this.mControlService.menuVisible(false);
    this.mControlService.menuOpen(false);
  }
}
