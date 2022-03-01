import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateSessionGuard } from '@core/guards/validate-session.guard';




const routes: Routes = [
  {
    path:'auth',
    loadChildren:() => import('@modules/auth/auth.module').then((m) =>m.AuthModule)
  },
  {
    path:'task',
    loadChildren:() => import('@modules/task/task.module').then((m) =>m.TaskModule),
    canActivate:[ValidateSessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
