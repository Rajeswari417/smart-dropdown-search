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
  errorMessage = '';
  displayall= false;
  @Input() noOfRecordsToShow = 3;
  @Input() privilege = false;
  @Input() countryList: Array<any> = []
  @Input() searchResult: Array<any> = [];
  @Input() isShow = false;
  @Output() OnChangeListner = new EventEmitter<any>();
  @Output() addCountry = new EventEmitter<any>();
  @Output() selectedCountry = new EventEmitter<String>();



  constructor(private countryService: CountryService) {
    this.countryService.getListCountry().subscribe(length => {
      if(this.displayall)
      this.noOfRecordsToShow = length;
    });
  }
  ngOnInit() {
    this.limit = this.noOfRecordsToShow
  }

  //Custome DropDown Methods


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
      this.displayall= true;
        this.noOfRecordsToShow = this.searchResult.length;
      } 
      }
}
