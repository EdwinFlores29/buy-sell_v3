import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router} from '@angular/router';
import { Listing} from "../types";

@Component({
  selector: 'app-listings-data-form',
  templateUrl: './listings-data-form.component.html',
  styleUrls: ['./listings-data-form.component.css']
})
export class ListingsDataFormComponent implements OnInit {
  @Input() buttonText: string = '';
  @Input() currentName: string = '';
  @Input() currentDescription: string = '';
  @Input() currentPrice: string = '';

  name: string = '';
  description: string = '';
   price: string = '';

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onButtonClicked(): void {
     this.onSubmit.emit({
       id: 'null',
       name: this.name,
       description: this.description,
       price: Number(this.price),
       views: 0,
     });
  }
}
