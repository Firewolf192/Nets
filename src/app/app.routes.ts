import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Types } from './types/types';
import { Topologies } from './topologies/topologies';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'types', component:Types},
    {path:'topologies', component:Topologies}

];
