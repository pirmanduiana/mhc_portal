import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent {
  fxLayoutAlign:string;
 
  constructor(
    private authService: AuthService,
  ){
    this.fxLayoutAlign = "center center";
  };

  ngOnInit(): void {
    // ..
  }

  applySearch(val: string): void
  {
    this.authService.getPasien(val).subscribe(result => {
      this.fxLayoutAlign = "center";
      console.log(result);
    });
  }
}
