import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/learn',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'connect',
    loadChildren: () => import('./connect/connect.module').then( m => m.ConnectPageModule)
  },
  {
    path: 'zones',
    loadChildren: () => import('./zones/zones.module').then( m => m.ZonesPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then( m => m.CardPageModule)
  }
  ,{
    path: 'learn',
    loadChildren: () => import('./learn/learn.module').then( m => m.LearnPageModule)
  }
  ,{
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path:'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
