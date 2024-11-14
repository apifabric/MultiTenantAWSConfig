import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerHomeComponent } from './home/Container-home.component';
import { ContainerNewComponent } from './new/Container-new.component';
import { ContainerDetailComponent } from './detail/Container-detail.component';

const routes: Routes = [
  {path: '', component: ContainerHomeComponent},
  { path: 'new', component: ContainerNewComponent },
  { path: ':id', component: ContainerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Container-detail-permissions'
      }
    }
  },{
    path: ':container_id/ContainerLog', loadChildren: () => import('../ContainerLog/ContainerLog.module').then(m => m.ContainerLogModule),
    data: {
        oPermission: {
            permissionId: 'ContainerLog-detail-permissions'
        }
    }
},{
    path: ':container_id/UserContainerAccess', loadChildren: () => import('../UserContainerAccess/UserContainerAccess.module').then(m => m.UserContainerAccessModule),
    data: {
        oPermission: {
            permissionId: 'UserContainerAccess-detail-permissions'
        }
    }
}
];

export const CONTAINER_MODULE_DECLARATIONS = [
    ContainerHomeComponent,
    ContainerNewComponent,
    ContainerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }