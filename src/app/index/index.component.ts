/**
 * Created by SiPingSoft on 2017/8/21.
 */
import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  items: MenuItem[];

  ngOnInit(){
    this.items = [
      {
        label: '商城装修',
        icon: 'fa fa-object-ungroup',
        items: [
          {
            label: '首页',
            icon: 'fa fa-angle-right',
            routerLink: ['/home']
          },
          {
            label: '分类',
            icon: 'fa fa-angle-right',
            routerLink: ['/type']
          }
        ]
      },
      {
        label: '商品管理',
        icon: 'fa fa-table',
        items: [
          {
            label: '发布商品',
            icon: 'fa fa-angle-right',
            routerLink: ['/goodsAdd']
          },
          {
            label: '商品列表',
            icon: 'fa fa-angle-right',
            routerLink: ['/goodsList']
          }
        ]
      },
      {
        label: '商城装修',
        icon: 'fa fa-object-ungroup',
        items: [
          {
            label: '首页',
            icon: 'fa fa-angle-right'
          },
          {
            label: '分类',
            icon: 'fa fa-angle-right'
          }
        ]
      },
      {
        label: '商品管理',
        icon: 'fa fa-table',
        items: [
          {
            label: '发布商品',
            icon: 'fa fa-angle-right'
          },
          {
            label: '商品列表',
            icon: 'fa fa-angle-right'
          }
        ]
      },
      {
        label: '商城装修',
        icon: 'fa fa-object-ungroup',
        items: [
          {
            label: '首页',
            icon: 'fa fa-angle-right'
          },
          {
            label: '分类',
            icon: 'fa fa-angle-right'
          }
        ]
      },
      {
        label: '商品管理',
        icon: 'fa fa-table',
        items: [
          {
            label: '发布商品',
            icon: 'fa fa-angle-right'
          },
          {
            label: '商品列表',
            icon: 'fa fa-angle-right'
          }
        ]
      },
      {
        label: '商城装修',
        icon: 'fa fa-object-ungroup',
        items: [
          {
            label: '首页',
            icon: 'fa fa-angle-right'
          },
          {
            label: '分类',
            icon: 'fa fa-angle-right'
          }
        ]
      },
      {
        label: '商品管理',
        icon: 'fa fa-table',
        items: [
          {
            label: '发布商品',
            icon: 'fa fa-angle-right'
          },
          {
            label: '商品列表',
            icon: 'fa fa-angle-right'
          }
        ]
      },
    ];
  }
}
