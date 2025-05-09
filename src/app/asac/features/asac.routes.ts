import { Routes } from "@angular/router";

export default [
    {
        path:'',
        loadComponent: () => import('./asac-page/asac-page.component'),
    }
] as Routes