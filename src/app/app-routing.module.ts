import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  { path: "login", loadChildren: "./login/login.module#LoginModule" },
  {
    path: "register",
    loadChildren: "./register/register.module#RegisterPageModule"
  },
  { path: "about", loadChildren: "./about/about.module#AboutPageModule" },
  {
    path: "user",
    children: [
      { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    ]
  },
  { path: "", pathMatch: "full", redirectTo: "home" },  { path: 'orders', loadChildren: './orders/orders.module#OrdersPageModule' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
