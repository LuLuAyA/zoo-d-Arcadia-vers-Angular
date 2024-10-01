import { Routes } from '@angular/router';
import { AnimauxComponent } from './animaux/animaux.component';
import { AvisComponent } from './avis/avis.component';
import { BilletterieComponent } from './billetterie/billetterie.component';
import { BureauComponent } from './bureau/bureau.component';
import { ContactComponent } from './contact/contact.component';
import { EspaceComponent } from './espace/espace.component';
import { HistoireComponent } from './histoire/histoire.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { RecompenseComponent } from './recompense/recompense.component';
import { ServiceComponent } from './service/service.component';
import { ValeursComponent } from './valeurs/valeurs.component';

    
export const routes: Routes = [
    { path: 'animaux', component: AnimauxComponent},
    { path: 'avis' , component: AvisComponent},
    { path: 'billetterie', component: BilletterieComponent},
    { path: 'bureau' , component: BureauComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'espace' , component: EspaceComponent},
    { path: 'Histoire' , component: HistoireComponent  },
    { path: 'home' , component: HomeComponent},
    { path: 'infos', component: InfosComponent},
    { path: 'Recompense' , component: RecompenseComponent},
    { path: 'service', component: ServiceComponent},
    { path: 'valeurs' , component: ValeursComponent},

];
