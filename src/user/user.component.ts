import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/country.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  searchInput = ''
  countryList = [];
  searchResult = [];
  count = 3
  showDropDown = false
  selectedCountry = 'Select Country';
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.doGet();
  }

   //NetWork Call
  //GET Requesting Method For CountryList
  doGet() {
    this.countryService.GETRequest().subscribe(res => {
      if (res)
        localStorage.setItem('countryList', JSON.stringify(res.data));

      this.countryList = JSON.parse(localStorage.getItem('countryList'))
       this.searchResult = this.countryList
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
  
  setSeletedCountry(event: any){
    this.selectedCountry = event
    this.showDropDown = false
  }
}
