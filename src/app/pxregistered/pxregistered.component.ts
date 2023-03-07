import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pxregistered',
  templateUrl: './pxregistered.component.html',
  styleUrls: ['./pxregistered.component.css']
})
export class PxregisteredComponent {

  formGroup: FormGroup;

  constructor(){
    this.formGroup = new FormGroup({
      date: new FormControl(''),
      name: new FormControl(''),
    });
  }

}
