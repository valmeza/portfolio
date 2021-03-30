import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MobileHambugerButtonComponent } from './components/mobile-hambuger-button/mobile-hambuger-button.component';
import { MobileHeaderComponent } from './components/header/mobile-header/mobile-header.component';
import { MobileRoutingLinksComponent } from './components/header/mobile-routing-links/mobile-routing-links.component';
import { RoutingLinksComponent } from './components/header/routing-links/routing-links.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileHambugerButtonComponent,
    MobileHeaderComponent,
    MobileRoutingLinksComponent,
    RoutingLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
