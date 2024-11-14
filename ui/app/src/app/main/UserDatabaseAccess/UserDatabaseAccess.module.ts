import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERDATABASEACCESS_MODULE_DECLARATIONS, UserDatabaseAccessRoutingModule} from  './UserDatabaseAccess-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserDatabaseAccessRoutingModule
  ],
  declarations: USERDATABASEACCESS_MODULE_DECLARATIONS,
  exports: USERDATABASEACCESS_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserDatabaseAccessModule { }