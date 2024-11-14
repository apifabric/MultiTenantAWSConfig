import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { S3BucketHomeComponent } from './home/S3Bucket-home.component';
import { S3BucketNewComponent } from './new/S3Bucket-new.component';
import { S3BucketDetailComponent } from './detail/S3Bucket-detail.component';

const routes: Routes = [
  {path: '', component: S3BucketHomeComponent},
  { path: 'new', component: S3BucketNewComponent },
  { path: ':id', component: S3BucketDetailComponent,
    data: {
      oPermission: {
        permissionId: 'S3Bucket-detail-permissions'
      }
    }
  },{
    path: ':s3_bucket_id/S3BucketEvent', loadChildren: () => import('../S3BucketEvent/S3BucketEvent.module').then(m => m.S3BucketEventModule),
    data: {
        oPermission: {
            permissionId: 'S3BucketEvent-detail-permissions'
        }
    }
},{
    path: ':s3_bucket_id/UserS3BucketAccess', loadChildren: () => import('../UserS3BucketAccess/UserS3BucketAccess.module').then(m => m.UserS3BucketAccessModule),
    data: {
        oPermission: {
            permissionId: 'UserS3BucketAccess-detail-permissions'
        }
    }
}
];

export const S3BUCKET_MODULE_DECLARATIONS = [
    S3BucketHomeComponent,
    S3BucketNewComponent,
    S3BucketDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S3BucketRoutingModule { }