import { Component } from '@angular/core';
import { SharedData } from '../../shared-data';

@Component({
  selector: 'app-delete-account-successful',
  imports: [],
  templateUrl: './delete-account-successful.html',
  styleUrl: './delete-account-successful.css'
})
export class DeleteAccountSuccessful {
constructor(public share:SharedData){}
}
