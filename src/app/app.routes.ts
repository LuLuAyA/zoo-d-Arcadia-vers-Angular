import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimauxComponent } from './animaux/animaux.component';
import { BilletterieComponent } from './billetterie/billetterie.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { InfosComponent } from './infos/infos.component';
import { HistoireComponent } from './histoire/histoire.component';
import { RecompenseComponent } from './recompense/recompense.component';
import { ValeursComponent } from './valeurs/valeurs.component';
import { AvisComponent } from './avis/avis.component';
import { BureauComponent } from './bureau/bureau.component';
import { EspaceComponent } from './espace/espace.component';

    
export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'service', component: ServiceComponent},
    { path: 'navbar', component: NavbarComponent},
    { path: 'animaux', component: AnimauxComponent},
    { path: 'billetterie', component: BilletterieComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'infos', component: InfosComponent},
    { path: 'Histoire' , component: HistoireComponent  },
    { path: 'Recompense' , component: RecompenseComponent},
    { path: 'valeurs' , component: ValeursComponent},
    { path: 'avis' , component: AvisComponent},
    { path: 'bureau' , component: BureauComponent},
    { path: 'espace' , component: EspaceComponent},

];
