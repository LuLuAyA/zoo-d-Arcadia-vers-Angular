import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from "./footer/footer.component";
import { AnimauxComponent } from "./animaux/animaux.component";
import { BilletterieComponent } from './billetterie/billetterie.component';
import { ContactComponent } from './contact/contact.component';
import { InfosComponent } from './infos/infos.component';
import { HistoireComponent } from './histoire/histoire.component';
import { AvisComponent } from './avis/avis.component';
import { BureauComponent } from './bureau/bureau.component';
import { EspaceComponent } from './espace/espace.component';
import { RecompenseComponent } from './recompense/recompense.component';
import { ValeursComponent } from './valeurs/valeurs.component';


@Component({
  selector: 'ess-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ServiceComponent, NavbarComponent, FooterComponent, AnimauxComponent, BilletterieComponent, ContactComponent, InfosComponent, HistoireComponent, AvisComponent, BureauComponent, EspaceComponent, RecompenseComponent, ValeursComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'essai';
}
