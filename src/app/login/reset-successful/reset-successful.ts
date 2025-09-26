import { Component } from '@angular/core';
import { SharedData } from '../../shared-data';

@Component({
  selector: 'app-reset-successful',
  imports: [],
  templateUrl: './reset-successful.html',
  styleUrl: './reset-successful.css'
})
export class ResetSuccessful {
constructor(public share:SharedData){}
}
