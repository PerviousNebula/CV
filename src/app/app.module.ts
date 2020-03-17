import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainJumbotronComponent } from './components/main-jumbotron/main-jumbotron.component';
import { AboutComponent } from './components/about/about.component';
import { PartnersComponent } from './components/partners/partners.component';
import { BioComponent } from './components/bio/bio.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainJumbotronComponent,
    AboutComponent,
    PartnersComponent,
    BioComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
