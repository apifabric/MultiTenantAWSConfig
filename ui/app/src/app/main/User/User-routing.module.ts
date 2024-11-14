import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/User-home.component';
import { UserNewComponent } from './new/User-new.component';
import { UserDetailComponent } from './detail/User-detail.component';

const routes: Routes = [
  {path: '', component: UserHomeComponent},
  { path: 'new', component: UserNewComponent },
  { path: ':id', component: UserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'User-detail-permissions'
      }
    }
  },{
    path: ':user_id/UserContainerAccess', loadChildren: () => import('../UserContainerAccess/UserContainerAccess.module').then(m => m.UserContainerAccessModule),
    data: {
        oPermission: {
            permissionId: 'UserContainerAccess-detail-permissions'
        }
    }
},{
    path: ':user_id/UserDatabaseAccess', loadChildren: () => import('../UserDatabaseAccess/UserDatabaseAccess.module').then(m => m.UserDatabaseAccessModule),
    data: {
        oPermission: {
            permissionId: 'UserDatabaseAccess-detail-permissions'
        }
    }
},{
    path: ':user_id/UserS3BucketAccess', loadChildren: () => import('../UserS3BucketAccess/UserS3BucketAccess.module').then(m => m.UserS3BucketAccessModule),
    data: {
        oPermission: {
            permissionId: 'UserS3BucketAccess-detail-permissions'
        }
    }
}
];

export const USER_MODULE_DECLARATIONS = [
    UserHomeComponent,
    UserNewComponent,
    UserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }