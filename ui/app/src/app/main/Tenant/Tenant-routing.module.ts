import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantHomeComponent } from './home/Tenant-home.component';
import { TenantNewComponent } from './new/Tenant-new.component';
import { TenantDetailComponent } from './detail/Tenant-detail.component';

const routes: Routes = [
  {path: '', component: TenantHomeComponent},
  { path: 'new', component: TenantNewComponent },
  { path: ':id', component: TenantDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Tenant-detail-permissions'
      }
    }
  },{
    path: ':tenant_id/Container', loadChildren: () => import('../Container/Container.module').then(m => m.ContainerModule),
    data: {
        oPermission: {
            permissionId: 'Container-detail-permissions'
        }
    }
},{
    path: ':tenant_id/Database', loadChildren: () => import('../Database/Database.module').then(m => m.DatabaseModule),
    data: {
        oPermission: {
            permissionId: 'Database-detail-permissions'
        }
    }
},{
    path: ':tenant_id/S3Bucket', loadChildren: () => import('../S3Bucket/S3Bucket.module').then(m => m.S3BucketModule),
    data: {
        oPermission: {
            permissionId: 'S3Bucket-detail-permissions'
        }
    }
},{
    path: ':tenant_id/SecurityIncident', loadChildren: () => import('../SecurityIncident/SecurityIncident.module').then(m => m.SecurityIncidentModule),
    data: {
        oPermission: {
            permissionId: 'SecurityIncident-detail-permissions'
        }
    }
},{
    path: ':tenant_id/User', loadChildren: () => import('../User/User.module').then(m => m.UserModule),
    data: {
        oPermission: {
            permissionId: 'User-detail-permissions'
        }
    }
}
];

export const TENANT_MODULE_DECLARATIONS = [
    TenantHomeComponent,
    TenantNewComponent,
    TenantDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantRoutingModule { }