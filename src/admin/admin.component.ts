import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountryService } from 'src/country.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  searchInput = ''
  countryList = [];
  searchResult = [];
  count = 2
  showDropDown = false
  selectedCountry = 'Selected Country';


  constructor(private countryService: CountryService) { }
  ngOnInit() { 
    this.doGet();
  }


  openDropDown() {
    this.showDropDown = !this.showDropDown;
  }
  //Get CountryList
  doGet() {
    this.countryService.GETRequest().subscribe(res => {
      if (res)
        localStorage.setItem('countryList', JSON.stringify(res.data));

      this.countryList = JSON.parse(localStorage.getItem('countryList'))
       this.searchResult = this.countryList
    })
  }

  //add country to the list
  addCountry() {
    console.log(this.searchInput);
    this.countryService.POSTRequest(this.searchInput).subscribe(res => console.log(res.message))
    this.doGet();
  }

  

  filterString(value: any) {
    console.log(value)
    if (value === '') {
         //this.emptySearchString = true;
      return this.searchResult = [];
    }
    // this.emptySearchString = false;
    this.searchResult = this.countryList.filter((series) => {
      return series.name.toLowerCase().startsWith(value.toLowerCase());
    })
    return this.searchResult;
  }
}
