import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'main', loadChildren: () => import('../main/main.module').then(m => m.MainPageModule)
      },
      {
        path: 'tv', loadChildren: () => import('../tv/tv.module').then(m => m.TvPageModule)
      },
      {
        path: 'led', loadChildren: () => import('../led/led.module').then(m => m.LedPageModule)
      },
      {
        path: 'all', loadChildren: () => import('../all/all.module').then(m => m.AllPageModule)
      },
      {
        path: '', pathMatch: 'full', redirectTo: 'main'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {
}
