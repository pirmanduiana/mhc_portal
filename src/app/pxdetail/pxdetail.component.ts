import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pxdetail',
  templateUrl: './pxdetail.component.html',
  styleUrls: ['./pxdetail.component.css']
})
export class PxdetailComponent {
  
  px: any = {};
  px_client: any = {};
  px_department: any = {};
  px_status: any = {};
  px_reg_status: string = "";
  id: any;
  type: any;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.type = params['type'];
      this.authService.getDetailPx(params['id'], params['type']).subscribe(result => {
        this.px = result.datas;
        this.px_client = result.datas.client || {};
        this.px_department = result.datas.department || {};
        this.px_status = result.datas.status;
        this.px_reg_status = this.mapRegStatus(result.datas.reg_status);
      });
    });
  }

  mapRegStatus(reg_status: number): any
  {
    let maper = ["Unregistered", "Registered", "In house"];
    return maper.at(reg_status);
  }

  back(): void
  {
    this.location.back();
  }

}
