import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuResponsivoComponent } from './components/menu-responsivo/menu-responsivo.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuDisplayService } from './components/menu-responsivo/menu-display.service';
import { CommonModule } from '@angular/common';
import { MenuVisivelService } from './components/menu-responsivo/menu-visivel.service';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    MenuResponsivoComponent,
    ConteudoComponent,
    FooterComponent,
  ],
  imports: [
    LayoutRoutingModule,
    CommonModule      
  ],
  providers: [MenuDisplayService, MenuVisivelService]
})
export class LayoutModule { }