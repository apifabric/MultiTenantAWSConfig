import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDatabaseAccessHomeComponent } from './home/UserDatabaseAccess-home.component';
import { UserDatabaseAccessNewComponent } from './new/UserDatabaseAccess-new.component';
import { UserDatabaseAccessDetailComponent } from './detail/UserDatabaseAccess-detail.component';

const routes: Routes = [
  {path: '', component: UserDatabaseAccessHomeComponent},
  { path: 'new', component: UserDatabaseAccessNewComponent },
  { path: ':id', component: UserDatabaseAccessDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserDatabaseAccess-detail-permissions'
      }
    }
  }
];

export const USERDATABASEACCESS_MODULE_DECLARATIONS = [
    UserDatabaseAccessHomeComponent,
    UserDatabaseAccessNewComponent,
    UserDatabaseAccessDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDatabaseAccessRoutingModule { }