import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'project',
        loadChildren: () => import('./project/project.module').then( m => m.ProjectPageModule)
      },
      {
        path: 'release',
        loadChildren: () => import('./release/release.module').then( m => m.ReleasePageModule)
      },
      {
        path: 'task',
        loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule)
      },
      {
        path: 'report',
        loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
      },
      {
        path: 'peer-review',
        loadChildren: () => import('./peer-review/peer-review.module').then( m => m.PeerReviewPageModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
