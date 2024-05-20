import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/components/home/home.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { JobPostingComponent } from './ui/components/job-posting/job-posting.component';

const routes: Routes = [
  {path:"admin", component:LayoutComponent, children:[
    {path:"", component:DashboardComponent},
    {path:"job-posting", loadChildren : () => import("./admin/components/job-posting/job-posting.module")
      .then(module => module.JobPostingModule)},
    {path:"skill-test", loadChildren : () => import("./admin/components/skill-tests/skill-tests.module")
      .then(module => module.SkillTestsModule)},
    {path:"analyzes", loadChildren: () => import("./admin/components/analyzes/analyzes.module")
      .then(module => module.AnalyzesModule)},
    {path:"application",loadChildren: () => import("./admin/components/application/application.module")
    .then(module => module.ApplicationModule)},
    {path:"calendar",loadChildren: () => import("./admin/components/calendar/calendar.module")
    .then(module => module.CalendarModule)},
    {path:"policies",loadChildren: () => import("./admin/components/policies/policies.module")
    .then(module => module.PoliciesModule)},
  ]},
  {path:"",  component:HomeComponent},
  {path:"job-posting", loadChildren: () => import("./ui/components/job-posting/job-posting.module")
    .then(module => module.JobPostingModule)
  },
  {path:"log-in", loadChildren: () => import("./ui/components/log-in/log-in.module")
  .then(module => module.LogInModule)},
  {path:"prices", loadChildren: () => import("./ui/components/prices/prices.module")
  .then(module => module.PricesModule)},
  {path:"users", loadChildren: () => import("./ui/components/users/users.module")
  .then(module => module.UsersModule)},
  {path:"sign-up", loadChildren: () => import("./ui/components/sign-up/sign-up.module")
  .then(module => module.SignUpModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


