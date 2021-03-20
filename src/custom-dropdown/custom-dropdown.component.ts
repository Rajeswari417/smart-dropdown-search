import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {
  state =  {
    open: false,
    countriesList: [],
    filteredList: [],
    searchVal: "",
    newCountryVal: "",
    loadMoreCount: 0,
    privilege: false
  }
  isOpenDropdown = false;


  @Input() privilege = false;
  public searchInput='';
   
  @Input() limit = 2;
  emptySearchString = true;

 @Input() countryList: Array<any> = []
 @Input() searchResult: Array<any> = [];
 @Input() isShow = false;
 @Output() keyPressed = new EventEmitter<any>();
  errorMessage = '';


  constructor(private countryService: CountryService,


  ) { }
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
  }



  openist(){
    this.isOpenDropdown = !this.isOpenDropdown
  }
 

  
  fetchSeries(event: any) {
      this.keyPressed.emit(this.searchInput);
    }

  addCountry(){}

  displyFullList() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.limit = this.searchResult.length;

    } else {
      this.limit = 2

    }
  }
}
