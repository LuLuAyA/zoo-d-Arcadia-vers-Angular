import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ServiceComponent } from './service/service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimauxComponent } from './animaux/animaux.component';
import { BilletterieComponent } from './billetterie/billetterie.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { InfosComponent } from './infos/infos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'formulaire', component: FormulaireComponent},
    { path: 'service', component: ServiceComponent},
    { path: 'navbar', component: NavbarComponent},
    { path: 'animaux', component: AnimauxComponent},
    { path: 'billetterie', component: BilletterieComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'infos', component: InfosComponent},

];
