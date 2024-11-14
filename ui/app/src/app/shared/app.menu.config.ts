import { MenuRootItem } from 'ontimize-web-ngx';

import { ContainerCardComponent } from './Container-card/Container-card.component';

import { ContainerLogCardComponent } from './ContainerLog-card/ContainerLog-card.component';

import { DatabaseCardComponent } from './Database-card/Database-card.component';

import { DatabaseEventCardComponent } from './DatabaseEvent-card/DatabaseEvent-card.component';

import { S3BucketCardComponent } from './S3Bucket-card/S3Bucket-card.component';

import { S3BucketEventCardComponent } from './S3BucketEvent-card/S3BucketEvent-card.component';

import { SecurityIncidentCardComponent } from './SecurityIncident-card/SecurityIncident-card.component';

import { TenantCardComponent } from './Tenant-card/Tenant-card.component';

import { UserCardComponent } from './User-card/User-card.component';

import { UserContainerAccessCardComponent } from './UserContainerAccess-card/UserContainerAccess-card.component';

import { UserDatabaseAccessCardComponent } from './UserDatabaseAccess-card/UserDatabaseAccess-card.component';

import { UserS3BucketAccessCardComponent } from './UserS3BucketAccess-card/UserS3BucketAccess-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Container', name: 'CONTAINER', icon: 'view_list', route: '/main/Container' }
    
        ,{ id: 'ContainerLog', name: 'CONTAINERLOG', icon: 'view_list', route: '/main/ContainerLog' }
    
        ,{ id: 'Database', name: 'DATABASE', icon: 'view_list', route: '/main/Database' }
    
        ,{ id: 'DatabaseEvent', name: 'DATABASEEVENT', icon: 'view_list', route: '/main/DatabaseEvent' }
    
        ,{ id: 'S3Bucket', name: 'S3BUCKET', icon: 'view_list', route: '/main/S3Bucket' }
    
        ,{ id: 'S3BucketEvent', name: 'S3BUCKETEVENT', icon: 'view_list', route: '/main/S3BucketEvent' }
    
        ,{ id: 'SecurityIncident', name: 'SECURITYINCIDENT', icon: 'view_list', route: '/main/SecurityIncident' }
    
        ,{ id: 'Tenant', name: 'TENANT', icon: 'view_list', route: '/main/Tenant' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
        ,{ id: 'UserContainerAccess', name: 'USERCONTAINERACCESS', icon: 'view_list', route: '/main/UserContainerAccess' }
    
        ,{ id: 'UserDatabaseAccess', name: 'USERDATABASEACCESS', icon: 'view_list', route: '/main/UserDatabaseAccess' }
    
        ,{ id: 'UserS3BucketAccess', name: 'USERS3BUCKETACCESS', icon: 'view_list', route: '/main/UserS3BucketAccess' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    ContainerCardComponent

    ,ContainerLogCardComponent

    ,DatabaseCardComponent

    ,DatabaseEventCardComponent

    ,S3BucketCardComponent

    ,S3BucketEventCardComponent

    ,SecurityIncidentCardComponent

    ,TenantCardComponent

    ,UserCardComponent

    ,UserContainerAccessCardComponent

    ,UserDatabaseAccessCardComponent

    ,UserS3BucketAccessCardComponent

];