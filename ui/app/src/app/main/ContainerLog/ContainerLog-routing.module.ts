import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerLogHomeComponent } from './home/ContainerLog-home.component';
import { ContainerLogNewComponent } from './new/ContainerLog-new.component';
import { ContainerLogDetailComponent } from './detail/ContainerLog-detail.component';

const routes: Routes = [
  {path: '', component: ContainerLogHomeComponent},
  { path: 'new', component: ContainerLogNewComponent },
  { path: ':id', component: ContainerLogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ContainerLog-detail-permissions'
      }
    }
  }
];

export const CONTAINERLOG_MODULE_DECLARATIONS = [
    ContainerLogHomeComponent,
    ContainerLogNewComponent,
    ContainerLogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerLogRoutingModule { }