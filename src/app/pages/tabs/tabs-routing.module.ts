import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { TabsPage } from './tabs.page';
 
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
          }
        ]
      },
      {
        path: 'monitor',
        children: [
          {
            path: '',
            loadChildren: () => import('../monitor/monitor.module').then( m => m.MonitorPageModule)
          }
        ]
      },

      {
        path: 'calendar',
        children: [
          {
            path: '',
            loadChildren: () => import('../calendar/calendar.module').then( m => m.CalendarPageModule)
          }
        ]
      }

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}