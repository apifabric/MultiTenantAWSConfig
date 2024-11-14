import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseHomeComponent } from './home/Database-home.component';
import { DatabaseNewComponent } from './new/Database-new.component';
import { DatabaseDetailComponent } from './detail/Database-detail.component';

const routes: Routes = [
  {path: '', component: DatabaseHomeComponent},
  { path: 'new', component: DatabaseNewComponent },
  { path: ':id', component: DatabaseDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Database-detail-permissions'
      }
    }
  },{
    path: ':database_id/DatabaseEvent', loadChildren: () => import('../DatabaseEvent/DatabaseEvent.module').then(m => m.DatabaseEventModule),
    data: {
        oPermission: {
            permissionId: 'DatabaseEvent-detail-permissions'
        }
    }
},{
    path: ':database_id/UserDatabaseAccess', loadChildren: () => import('../UserDatabaseAccess/UserDatabaseAccess.module').then(m => m.UserDatabaseAccessModule),
    data: {
        oPermission: {
            permissionId: 'UserDatabaseAccess-detail-permissions'
        }
    }
}
];

export const DATABASE_MODULE_DECLARATIONS = [
    DatabaseHomeComponent,
    DatabaseNewComponent,
    DatabaseDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseRoutingModule { }