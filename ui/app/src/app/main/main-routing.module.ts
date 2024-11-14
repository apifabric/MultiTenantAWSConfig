import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Container', loadChildren: () => import('./Container/Container.module').then(m => m.ContainerModule) },
    
        { path: 'ContainerLog', loadChildren: () => import('./ContainerLog/ContainerLog.module').then(m => m.ContainerLogModule) },
    
        { path: 'Database', loadChildren: () => import('./Database/Database.module').then(m => m.DatabaseModule) },
    
        { path: 'DatabaseEvent', loadChildren: () => import('./DatabaseEvent/DatabaseEvent.module').then(m => m.DatabaseEventModule) },
    
        { path: 'S3Bucket', loadChildren: () => import('./S3Bucket/S3Bucket.module').then(m => m.S3BucketModule) },
    
        { path: 'S3BucketEvent', loadChildren: () => import('./S3BucketEvent/S3BucketEvent.module').then(m => m.S3BucketEventModule) },
    
        { path: 'SecurityIncident', loadChildren: () => import('./SecurityIncident/SecurityIncident.module').then(m => m.SecurityIncidentModule) },
    
        { path: 'Tenant', loadChildren: () => import('./Tenant/Tenant.module').then(m => m.TenantModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
        { path: 'UserContainerAccess', loadChildren: () => import('./UserContainerAccess/UserContainerAccess.module').then(m => m.UserContainerAccessModule) },
    
        { path: 'UserDatabaseAccess', loadChildren: () => import('./UserDatabaseAccess/UserDatabaseAccess.module').then(m => m.UserDatabaseAccessModule) },
    
        { path: 'UserS3BucketAccess', loadChildren: () => import('./UserS3BucketAccess/UserS3BucketAccess.module').then(m => m.UserS3BucketAccessModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }