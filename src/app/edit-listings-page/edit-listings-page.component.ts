import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Listing} from "../types";
import { ListingsService} from "../listings.service";

@Component({
  selector: 'app-edit-listings-page',
  templateUrl: './edit-listings-page.component.html',
  styleUrls: ['./edit-listings-page.component.css']
})
export class EditListingsPageComponent implements OnInit{
  listings: Listing[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(<string>id)
      .subscribe(listing => this.listings = [listing]);
  }

  onSubmit({name, description, price}: {name: string, description: string, price: number}) {
    this.listingsService.editListing(this.listings[0].id, name, description, price)
      .subscribe(() => {
        alert('Your listing has been edited!');
        this.router.navigateByUrl('/my-listings');

      })
  }
  protected readonly String = String;
}
