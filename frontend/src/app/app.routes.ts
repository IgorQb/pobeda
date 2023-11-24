import { Routes } from '@angular/router';

export const routes: Routes = [

      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
      { 
        path: 'upload', 
        loadChildren: () => import('./pages/upload/upload.module').then(m => m.UploadModule),
      },
      { 
        path: 'obrabotka', 
        loadChildren: () => import('./pages/obrabotka/obrabotka.module').then(m => m.ObrabotkaModule),
      }
];
