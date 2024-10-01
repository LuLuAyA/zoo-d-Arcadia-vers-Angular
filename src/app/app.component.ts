import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimauxComponent } from "./animaux/animaux.component";
import { AvisComponent } from './avis/avis.component';
import { BilletterieComponent } from './billetterie/billetterie.component';
import { BureauComponent } from './bureau/bureau.component';
import { ContactComponent } from './contact/contact.component';
import { EspaceComponent } from './espace/espace.component';
import { FooterComponent } from "./footer/footer.component";
import { HistoireComponent } from './histoire/histoire.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecompenseComponent } from './recompense/recompense.component';
import { ServiceComponent } from './service/service.component';
import { ValeursComponent } from './valeurs/valeurs.component';


@Component({
  selector: 'ess-root', 
  standalone: true,
  imports: [RouterOutlet, AnimauxComponent, AvisComponent, BilletterieComponent, BureauComponent, ContactComponent, EspaceComponent, FooterComponent,HistoireComponent, HomeComponent, InfosComponent, NavbarComponent, RecompenseComponent, ServiceComponent, ValeursComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'essai';
}
