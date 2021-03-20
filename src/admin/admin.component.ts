import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountryService } from 'src/country.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  //Admin Component Properties
  searchInput = ''
  countryList = [];
  searchResult = [];
  count = 3
  showDropDown = false
  selectedCountry = 'Select Country';


  constructor(private countryService: CountryService) { }

  ngOnInit() { this.doGet(); }


  //NetWork Calls
  //GET Requesting Method For CountryList
  doGet() {
    this.countryService.GETRequest().subscribe(res => {
      if (res)
        localStorage.setItem('countryList', JSON.stringify(res.data));

      this.countryList = JSON.parse(localStorage.getItem('countryList'))
      this.searchResult = this.countryList
    })
  }

  //POST Requesting Method For add country to the list
  addCountry(value: boolean) {
    if (value)
      this.countryService.POSTRequest(this.searchInput).subscribe(
        res => {
          if (res.message == "success") {
            this.searchInput = '';
            this.showDropDown = false;
            this.selectedCountry = res.data.name
            this.filterString('');
          }
        })


  }

  openDropDown() {
    this.showDropDown = !this.showDropDown;
    this.filterString('')
  }

  filterString(value: any) {
    console.log(value)
    this.searchInput = value
    this.searchResult = this.countryList.filter((series) => {
      return series.name.toLowerCase().startsWith(value.toLowerCase());
    })
    return this.searchResult;
  }

  setSeletedCountry(event: any) {
    this.selectedCountry = event
    this.showDropDown = false
  }
}

