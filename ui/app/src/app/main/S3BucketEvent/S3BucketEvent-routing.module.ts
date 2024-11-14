import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { S3BucketEventHomeComponent } from './home/S3BucketEvent-home.component';
import { S3BucketEventNewComponent } from './new/S3BucketEvent-new.component';
import { S3BucketEventDetailComponent } from './detail/S3BucketEvent-detail.component';

const routes: Routes = [
  {path: '', component: S3BucketEventHomeComponent},
  { path: 'new', component: S3BucketEventNewComponent },
  { path: ':id', component: S3BucketEventDetailComponent,
    data: {
      oPermission: {
        permissionId: 'S3BucketEvent-detail-permissions'
      }
    }
  }
];

export const S3BUCKETEVENT_MODULE_DECLARATIONS = [
    S3BucketEventHomeComponent,
    S3BucketEventNewComponent,
    S3BucketEventDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S3BucketEventRoutingModule { }