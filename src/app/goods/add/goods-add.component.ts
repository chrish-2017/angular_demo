/**
 * Created by SiPingSoft on 2017/9/5.
 */
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TreeNode } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';

import { Attr } from "../../model/attr";
import { PageResponse } from "../../model/PageResponse";
import { HttpResponse } from "../../model/HttpResponse";

@Component({
  selector: 'goods-add',
  templateUrl: './goods-add.component.html',
  styleUrls: ['./goods-add.component.css'],
  providers: [ConfirmationService]
})

export class GoodsAddComponent {
  display: boolean;
  nodes: TreeNode[];
  goodsType: string;
  goodsTypeId: number;
  images: any[] = [];
  uploadFiles: any[] = [];
  goodsAttrs: Attr[] = [];
  goodsAttr: Attr;
  en: any;

  constructor(
    private http: HttpClient,
    private confirmationService: ConfirmationService
  ) {  }

  select() {
    this.display = true;
    this.http.get('https://easy-mock.com/mock/5b3357dce144ee0b9ede2e12/store/intranet/goodsType/getTreeNodes')
      .subscribe(result => {
        console.log(result);
        this.nodes = <TreeNode[]>result;
      });
  }

  nodeSelect(event) {
    var node = event.node;
    if(node.children.length == 0){
      this.display = false;
      this.goodsType = node.label;
      this.goodsTypeId = node.data;
    }
  }

  uploadPreviewFile(event, imgType) {
    var files = event.target.files;
    if(files.length > 8){
      this.confirmationService.confirm({
        message: '最多上传8张图片',
        accept: () => {
          //Actual logic to perform a confirmation
        }
      });
      return false;
    }
    if(imgType != '1'){
      var images = this.images;
      for (var i = 0; i < images.length; i++) {
        var image = images[i];
        if(image.imgType == imgType) {
          images.splice(i, 1);
        }
      }
    }
    for (var i = 0; i < files.length; i++) {
      if(!/image\/\w+/.test(files[i].type)){
        this.confirmationService.confirm({
          message: '请确保文件为图像类型',
          accept: () => {
            //Actual logic to perform a confirmation
          }
        });
        return false;
      }
      var reader = new FileReader();
      reader.readAsDataURL(files[i]);
      var that = this;
      reader.onload = function(e){
        var imgName = this.result;
        var image = {
          imgName: imgName,
          imgType: imgType
        };
        that.images.push(image);
      };
      this.uploadFiles.push(files[i]);
    }
  }

  delImg(index) {
    this.images.splice(index, 1);
    this.uploadFiles.splice(index, 1);
  }

  add() {
    var goodsAttrs = [...this.goodsAttrs];
    this.goodsAttr = new GoodsAttr('', {inventoryAmount:''}, '', '');
    goodsAttrs.push(this.goodsAttr);
    this.goodsAttrs = goodsAttrs;

    this.en = {
      firstDayOfWeek: 0,
      dayNames: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      dayNamesShort: ["周天", "周一", "周二", "周三", "周四", "周五", "周六"],
      dayNamesMin: ["日","一","二","三","四","五","六"],
      monthNames: [ "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月" ],
      monthNamesShort: [ "一", "二", "三", "四", "五", "六","七", "八", "九", "十", "十一", "十二" ],
      today: '今天',
      clear: '清除'
    };
  }

  del(index) {
    var goodsAttrs = [...this.goodsAttrs];
    goodsAttrs.splice(index, 1);
    this.goodsAttrs = goodsAttrs;
  }

  save(val){
    var data = new FormData();
    for(var key in val){
      data.append(key, val[key]);
    }
    var goodsAttrs = this.goodsAttrs;
    for(var i=0; i<goodsAttrs.length; i++){
      var goodsAttr = goodsAttrs[i];
      data.append('goodsAttrs['+i+'].attrValue', goodsAttr.attrValue);
      data.append('goodsAttrs['+i+'].inventory.inventoryAmount', goodsAttr.inventory.inventoryAmount);
      data.append('goodsAttrs['+i+'].sellPrice', goodsAttr.sellPrice);
      data.append('goodsAttrs['+i+'].orderClosingTime', goodsAttr.orderClosingTime);
    }
    var uploadFiles = this.uploadFiles;
    var images = this.images;
    for(var i=0; i<uploadFiles.length; i++){
      var uploadFile = uploadFiles[i];
      var image = images[i];
      data.append('uploadFile', uploadFile);
      data.append('images['+i+'].imgType', image.imgType);
    }
    this.http.post<HttpResponse>('https://easy-mock.com/mock/5b3357dce144ee0b9ede2e12/store/intranet/goods/publish', data).subscribe(data => {
      console.log(data);
      if(data.success){
        this.confirmationService.confirm({
          message: '操作成功',
          accept: () => {
            //Actual logic to perform a confirmation
          }
        });
      }
    })
  }
}

class GoodsAttr implements Attr {
  constructor(
    public attrValue,
    public inventory,
    public sellPrice,
    public orderClosingTime
  ) {  }
}
