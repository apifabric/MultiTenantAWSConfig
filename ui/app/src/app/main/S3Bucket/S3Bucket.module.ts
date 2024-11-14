import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {S3BUCKET_MODULE_DECLARATIONS, S3BucketRoutingModule} from  './S3Bucket-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    S3BucketRoutingModule
  ],
  declarations: S3BUCKET_MODULE_DECLARATIONS,
  exports: S3BUCKET_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class S3BucketModule { }