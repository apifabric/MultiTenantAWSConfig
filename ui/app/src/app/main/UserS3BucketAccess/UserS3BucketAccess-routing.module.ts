import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserS3BucketAccessHomeComponent } from './home/UserS3BucketAccess-home.component';
import { UserS3BucketAccessNewComponent } from './new/UserS3BucketAccess-new.component';
import { UserS3BucketAccessDetailComponent } from './detail/UserS3BucketAccess-detail.component';

const routes: Routes = [
  {path: '', component: UserS3BucketAccessHomeComponent},
  { path: 'new', component: UserS3BucketAccessNewComponent },
  { path: ':id', component: UserS3BucketAccessDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserS3BucketAccess-detail-permissions'
      }
    }
  }
];

export const USERS3BUCKETACCESS_MODULE_DECLARATIONS = [
    UserS3BucketAccessHomeComponent,
    UserS3BucketAccessNewComponent,
    UserS3BucketAccessDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserS3BucketAccessRoutingModule { }