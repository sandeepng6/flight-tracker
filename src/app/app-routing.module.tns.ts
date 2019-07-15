import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeModule } from "./home/home.module";
import { DetailModule } from "./detail/detail.module"

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => HomeModule },
    { path: "detail", loadChildren: () => DetailModule }
];

@NgModule({
    imports: [HomeModule, DetailModule, NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }