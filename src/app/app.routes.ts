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
        path: 'blog',
        loadChildren: () => import('./blog/features/blog.routes'),
        //
    },
    {
        path: '**',
        redirectTo: 'asac',
    },

];
