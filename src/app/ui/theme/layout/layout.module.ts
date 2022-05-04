import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './components/footer/footer.component';
import {MainComponent} from "@ui/layout/components/main/main.component";
import {Routes, RouterModule} from "@angular/router";
import {HeaderModule} from "@ui/layout/components/header/header.module";



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  }
];

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
