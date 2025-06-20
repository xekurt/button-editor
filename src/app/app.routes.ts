import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'playground',
        loadComponent: () =>
          import('@modules/playground-module/playground-module').then((m) => m.PlaygroundModule),
      },
      {
        path: 'documentation',
        loadComponent: () =>
          import('@modules/documentation-module/documentation-module').then(
            (m) => m.DocumentationModule,
          ),
      },
      {
        path: 'for-daniel',
        loadComponent: () =>
          import('@modules/for-daniel-module/for-daniel-module.component').then(
            (m) => m.ForDanielModule,
          ),
      },
      {
        path: '',
        redirectTo: 'playground',
        pathMatch: 'full',
      },
    ],
  },
];
