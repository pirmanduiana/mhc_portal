import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  is_reg: boolean = false;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar
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
        this.is_reg = result.datas.reg_status==1 ? true : false;
      });
    });
  }

  mapRegStatus(reg_status: number): any
  {
    let maper = ["Unregistered", "Registered", "In house"];
    return maper.at(reg_status);
  }

  regPasien(): void
  {
    this.authService.regPasien(this.type, this.id).subscribe(result => {
      this.snackBar.open(result.message, 'done', {
        duration: 800
      });
      this.is_reg = true;
    })
  }

  back(): void
  {
    this.location.back();
  }

}
