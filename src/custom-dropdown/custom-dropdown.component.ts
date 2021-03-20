import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {

  //CustomDropDown Properties
  isOpenDropdown = false;
  @Input() searchInput = '';
  limit = 0
  emptySearchString = true;
  displayall = false;
  errorMessage = '';
  @Input() noOfRecordsToShow = 1;
  @Input() privilege = false;
  @Input() countryList: Array<any> = []
  @Input() searchResult: Array<any> = [];
  @Input() isShow = false;
  @Output() OnChangeListner = new EventEmitter<any>();
  @Output() addCountry = new EventEmitter<any>();
  @Output() selectedCountry = new EventEmitter<String>();



  constructor(private countryService: CountryService) { }
  ngOnInit() {
    //   this.http.get<any>('http://localhost:3000/listcountries').subscribe({
    //     next: response => {
    //         this.countryList = response.data;
    //     },
    //     error: error => {
    //         this.errorMessage = error.message;
    //         console.error('There was an error!', error);
    //     }
    // })
    //   this.doGet();
    this.limit = this.noOfRecordsToShow
  }

  //Custome DropDown Methods

  openist() {
    this.isOpenDropdown = !this.isOpenDropdown
  }

  fetchSeries(event: any) {
    this.OnChangeListner.emit(this.searchInput);
  }

  addCountryToList() {
    this.addCountry.emit(true);
  }


  setSelectedCountry(event: any) {
    const val = event.target.id
    if (event.target.id == "item") {
      this.selectedCountry.emit(event.target.innerText)
      this.isOpenDropdown = false
    }
    if (event.target.id == "more-text") {
      this.displayall = !this.displayall;
      if (this.displayall) {
        this.limit = this.searchResult.length;
      } else {
        this.limit = this.noOfRecordsToShow

      }
    }

  }
}
