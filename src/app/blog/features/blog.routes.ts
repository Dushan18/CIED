import { Routes } from "@angular/router";

export default [
    {
        path: '',
        loadComponent: () => import('./blog-page/blog-page.component'),
    },
    {
        path: ':id',
        loadComponent: () => import('./blog-detail/blog-detail.component'), 
    }
] as Routes