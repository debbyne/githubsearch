import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  
  whatToSearch!:string
  @Output() Value = new EventEmitter<any>();

  relayValue() {
    this.Value.emit(this.whatToSearch)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
