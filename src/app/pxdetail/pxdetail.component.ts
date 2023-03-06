import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pxdetail',
  templateUrl: './pxdetail.component.html',
  styleUrls: ['./pxdetail.component.css']
})
export class PxdetailComponent {
  
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  back(): void
  {
    this.location.back();
  }

}
