import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MobileHambugerButtonComponent } from './components/header/mobile-hambuger-button/mobile-hambuger-button.component';
import { MobileHeaderComponent } from './components/header/mobile-header/mobile-header.component';
import { MobileRoutingLinksComponent } from './components/header/mobile-routing-links/mobile-routing-links.component';
import { RoutingLinksComponent } from './components/header/routing-links/routing-links.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectComponent } from './pages/project/project.component';
import { HomeContainerDetailsComponent } from './pages/home/home-container-details/home-container-details.component';
import { HomeDetailsComponent } from './pages/home/home-details/home-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterDetailsComponent } from './components/footer/footer-details/footer-details.component';
import { KonamiCodeComponent } from './components/konami-code/konami-code.component';
import { SkillsComponent } from './pages/about/skills/skills.component';
import { HobbiesComponent } from './pages/about/hobbies/hobbies.component';
import { AutobiographyComponent } from './pages/about/autobiography/autobiography.component';
import { CringeDadJokeGeneratorComponent } from './pages/about/cringe-dad-joke-generator/cringe-dad-joke-generator.component';
import { ButtonComponent } from './components/button/button.component';
import { CoffeeProjectComponent } from './pages/project/coffee-project/coffee-project.component';
import { DadlisterComponent } from './pages/project/dadlister/dadlister.component';
import { HobbyistComponent } from './pages/project/hobbyist/hobbyist.component';
import { BugWarsComponent } from './pages/project/bug-wars/bug-wars.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileHambugerButtonComponent,
    MobileHeaderComponent,
    MobileRoutingLinksComponent,
    RoutingLinksComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent,
    HomeContainerDetailsComponent,
    HomeDetailsComponent,
    FooterComponent,
    FooterDetailsComponent,
    KonamiCodeComponent,
    SkillsComponent,
    HobbiesComponent,
    AutobiographyComponent,
    CringeDadJokeGeneratorComponent,
    ButtonComponent,
    CoffeeProjectComponent,
    DadlisterComponent,
    HobbyistComponent,
    BugWarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
