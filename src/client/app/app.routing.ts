import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { ShellComponent } from './scotibank/clients/components/shell/shell.component'

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'clients',
        component: ShellComponent,
      },
    ],
  },

  { path: '**', redirectTo: '/clients' },
]

export const routing = RouterModule.forRoot(appRoutes)
