import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadComponent: ()=> import('./login/login.component').then(a=>a.LoginComponent)},
    {path:'homepage', loadComponent: ()=> import('./homepage/homepage.component').then(a=>a.HomepageComponent)}
];
