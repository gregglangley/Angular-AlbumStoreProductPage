import { Component, OnInit } from '@angular/core';
import { Album} from '../album';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-trackListing',
  templateUrl: './product-trackListing.component.html',
  styleUrls: ['./product-trackListing.component.css']
})
export class ProductTrackListingComponent implements OnInit {

  albumInfo: Album;

  constructor(private _productservice : ProductService) { }

  ngOnInit() {
    this._productservice.getAlbum(1).subscribe(response => this.albumInfo = response)
  }

}
