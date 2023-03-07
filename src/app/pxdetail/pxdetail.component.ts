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

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.authService.getDetailPx(params['id'], params['type']).subscribe(result => {
        this.px = result.datas;
        console.log(this.px);
      });
    });
  }

  back(): void
  {
    this.location.back();
  }

}
