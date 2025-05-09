import { Routes } from "@angular/router";

export default [
    {
        path:'',
        loadComponent: () => import('./sedyp-page/sedyp-page.component'),
    }
] as Routes