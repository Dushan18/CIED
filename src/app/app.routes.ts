import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'asac',
        loadChildren: () => import('./asac/features/asac.routes'),
        //
    },
    {
        path: 'sedyp',
        loadChildren: () => import('./sedyp/features/sedyp.routes'),
        //
    },
    {
        path: '**',
        redirectTo: 'asac',
    },

];
