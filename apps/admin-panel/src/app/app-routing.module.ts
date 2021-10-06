import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: ShellComponent, children: [
      { path: 'dashboard', component: DashboardComponent }
    ] },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
