import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ServiceComponent } from './service/service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from "./footer/footer.component";
import { AnimauxComponent } from "./animaux/animaux.component";
import { BilletterieComponent } from './billetterie/billetterie.component';
import { ContactComponent } from './contact/contact.component';
import { InfosComponent } from './infos/infos.component';

@Component({
  selector: 'ess-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FormulaireComponent, ServiceComponent, NavbarComponent, FooterComponent, AnimauxComponent, BilletterieComponent, ContactComponent, InfosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'essai';
}
