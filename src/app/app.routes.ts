import { Routes } from '@angular/router';
import { DocumentationModule } from '@modules/documentation-module/documentation-module.component';
import { ForDanielModule } from '@modules/for-daniel-module/for-daniel-module.component';
import { PlaygroundModule } from '@modules/playground-module/playground-module.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'playground', component: PlaygroundModule },
      { path: 'documentation', component: DocumentationModule },
      { path: 'for-daniel', component: ForDanielModule },
      { path: '', redirectTo: 'playground', pathMatch: 'full' },
    ],
  },
];
