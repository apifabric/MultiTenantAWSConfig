import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERS3BUCKETACCESS_MODULE_DECLARATIONS, UserS3BucketAccessRoutingModule} from  './UserS3BucketAccess-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserS3BucketAccessRoutingModule
  ],
  declarations: USERS3BUCKETACCESS_MODULE_DECLARATIONS,
  exports: USERS3BUCKETACCESS_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserS3BucketAccessModule { }