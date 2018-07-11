/**
 * Created by SiPingSoft on 2017/8/24.
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ConfirmationService } from 'primeng/primeng';

import { Type } from '../model/type';
import { PageResponse } from '../model/PageResponse';
import { HttpResponse } from '../model/HttpResponse';

@Component({
  selector: 'type',
  templateUrl: 'type.component.html',
  styleUrls: ['type.component.css'],
  providers: [ConfirmationService]
})

export class TypeComponent implements OnInit{
  loading: boolean;
  types: Type[];
  display: boolean;
  uploadFile: any;
  preview: string;
  typeName: string;
  imageId: number;
  id: number = 0;
  editing: boolean;
  selections: Type[];

  constructor(
    private http: HttpClient,
    private confirmationService: ConfirmationService
  ) {  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.loading = true;
    this.http.get<PageResponse>('https://easy-mock.com/mock/5b3357dce144ee0b9ede2e12/store/intranet/goodsType/getListByPage?level=1&categoryLevel=2')
      .subscribe(result => {
        console.log(result);
        this.types = <Type[]>result.records;
        this.loading = false;
      });
  }

  add() {
    this.uploadFile = null;
    this.editing = false;
    this.display = true;
    this.preview = '';
    this.typeName = '';
  }

  uploadPreviewFile(event) {
    var file = event.target.files[0];
    if(!/image\/\w+/.test(file.type)){
      this.confirmationService.confirm({
        message: '请确保文件为图像类型',
        accept: () => {
          //Actual logic to perform a confirmation
        }
      });
      return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    var that = this;
    reader.onload = function(e){
      that.preview = this.result;
    }
    this.uploadFile = file;
  }

  delImg() {
    this.preview = '';
  }

  cancel() {
    this.display = false;
  }

  confirm(val) {
    val.level = 1;
    var data = new FormData();
    for(var key in val){
      data.append(key, val[key]);
    }
    data.append('uploadFile', this.uploadFile);
    var url = 'add';
    if(this.editing){
      url = 'edit';
    }
    this.http.post<HttpResponse>('https://easy-mock.com/mock/5b3357dce144ee0b9ede2e12/store/intranet/goodsType/'+url, data).subscribe(data => {
      if(data.success){
        this.confirmationService.confirm({
          message: '操作成功',
          accept: () => {
            //Actual logic to perform a confirmation
            this.display = false;
            this.init();
          }
        });
      }
    })
  }

  edit(data) {
    this.uploadFile = null;
    this.editing = true;
    this.display = true;
    var id = data.id;
    this.http.get<PageResponse>('https://easy-mock.com/mock/5b3357dce144ee0b9ede2e12/store/intranet/goodsType/getById?id='+id)
      .subscribe(result => {
        console.log(result);
        var data = result.records;
        var path = data[0].image.imgName;
        this.preview = path;
        this.typeName = data[0].typeName;
        this.imageId = data[0].image.id;
        this.id = data[0].id;
      });
  }

  del() {
    var len = this.selections.length;
    if(len > 0){
      this.confirmationService.confirm({
        message: '确认删除吗？',
        accept: () => {
          //Actual logic to perform a confirmation
          var fd = new FormData();// 使用angularJS的FormData封装要传送的数据
          var delData = JSON.stringify(this.selections);//把对象(集合)转换为json串
          fd.append('delData', delData);//参数放入formData中
          this.http.post<HttpResponse>('https://easy-mock.com/mock/5b3357dce144ee0b9ede2e12/store/intranet/goodsType/del', fd).subscribe(data => {
            if(data.success){
              this.confirmationService.confirm({
                message: '操作成功',
                accept: () => {
                  //Actual logic to perform a confirmation
                  this.init();
                }
              });
            }
          })
        }
      });
    }else{
      this.confirmationService.confirm({
        message: '请至少选择一条数据',
        accept: () => {
          //Actual logic to perform a confirmation
        }
      });
    }
  }
}
