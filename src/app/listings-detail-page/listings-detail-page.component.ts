import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from "../types";
import { ListingsService } from "../listings.service";

@Component({
  selector: 'app-listings-detail-page',
  templateUrl: './listings-detail-page.component.html',
  styleUrls: ['./listings-detail-page.component.css']
})
export class ListingsDetailPageComponent implements OnInit{
  isloading: boolean = true;
  listings: Listing[] = [];

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService,
  ) {}
 ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(<string>id)
      .subscribe(listing => {
        this.listings = [listing];
        this.isloading = false;
      });
    this.listingsService.addViewToListing(<string>id)
      .subscribe(() => console.log('Views updated!'));
  }

}
