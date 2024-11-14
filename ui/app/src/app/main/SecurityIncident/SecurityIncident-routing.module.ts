import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityIncidentHomeComponent } from './home/SecurityIncident-home.component';
import { SecurityIncidentNewComponent } from './new/SecurityIncident-new.component';
import { SecurityIncidentDetailComponent } from './detail/SecurityIncident-detail.component';

const routes: Routes = [
  {path: '', component: SecurityIncidentHomeComponent},
  { path: 'new', component: SecurityIncidentNewComponent },
  { path: ':id', component: SecurityIncidentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SecurityIncident-detail-permissions'
      }
    }
  }
];

export const SECURITYINCIDENT_MODULE_DECLARATIONS = [
    SecurityIncidentHomeComponent,
    SecurityIncidentNewComponent,
    SecurityIncidentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityIncidentRoutingModule { }