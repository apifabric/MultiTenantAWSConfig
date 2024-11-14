import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {S3BUCKETEVENT_MODULE_DECLARATIONS, S3BucketEventRoutingModule} from  './S3BucketEvent-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    S3BucketEventRoutingModule
  ],
  declarations: S3BUCKETEVENT_MODULE_DECLARATIONS,
  exports: S3BUCKETEVENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class S3BucketEventModule { }