import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

import {Routes, RouterModule} from "@angular/router";
import {MainModule} from "@theme/layout/components/main/main.module";
import {HeaderModule} from "@theme/layout/components/header/header.module";
import {FooterModule} from "@theme/layout/components/footer/footer.module";



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  }
];

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MainModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
