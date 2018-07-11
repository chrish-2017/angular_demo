/**
 * Created by SiPingSoft on 2017/8/23.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index.component';
import { HomeComponent } from '../home/home.component';
import { TypeComponent } from '../type/type.component';
import { GoodsAddComponent } from '../goods/add/goods-add.component';
import { GoodsListComponent } from '../goods/list/goods-list.component';

const indexRoutes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'type',
        component: TypeComponent
      },
      {
        path: 'goodsAdd',
        component: GoodsAddComponent
      },
      {
        path: 'goodsList',
        component: GoodsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(indexRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class IndexRoutingModule { }
