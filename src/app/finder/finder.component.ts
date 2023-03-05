import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent {

  constructor(
    private authService: AuthService,
  ){};

  ngOnInit(): void {
    // ..
  }

  applySearch(val: string): void
  {
    this.authService.getPasien(val).subscribe(result => {
      console.log(result.datas);
    });
  }

  displayedColumns: string[] = ['mhc_code', 'name', 'type', 'status_name'];
  dataSource = [
    {mhc_code: 1, name: 'Hydrogen', type: 1.0079, status_name: 'H'},
    {mhc_code: 2, name: 'Helium', type: 4.0026, status_name: 'He'},
    {mhc_code: 3, name: 'Lithium', type: 6.941, status_name: 'Li'},
    {mhc_code: 4, name: 'Beryllium', type: 9.0122, status_name: 'Be'},
    {mhc_code: 5, name: 'Boron', type: 10.811, status_name: 'B'},
    {mhc_code: 6, name: 'Carbon', type: 12.0107, status_name: 'C'},
    {mhc_code: 7, name: 'Nitrogen', type: 14.0067, status_name: 'N'},
    {mhc_code: 8, name: 'Oxygen', type: 15.9994, status_name: 'O'},
    {mhc_code: 9, name: 'Fluorine', type: 18.9984, status_name: 'F'},
    {mhc_code: 10, name: 'Neon', type: 20.1797, status_name: 'Ne'},
  ];
}
