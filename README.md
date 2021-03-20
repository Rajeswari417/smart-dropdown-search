
//instructions to run the applicaiton.

1. npm install 

2.ng serve (default port is 4200)

3.change the url to "http://localhost:4200/admin

4.For visiting User componnet navigate to "http://localhost;4200/user"

custom-dropdown componet is a common component.

and for child and parent component communicaiton we used below mentioned properties

from Parent(admin,user) to Child

1.searchInput :  used for filtering the list
2.noOfRecordsToShow : How many row we want to display in the dropdown
3.privilege : used for specifying the admin and user functionalities.
4.countryList: List which is getting from service.
5. searchResult: List which will displays after filtering.
6 isShow : For Toggle the dropdown 

Poperties used for Child to Parent Communication
1. OnChangeListner = Used or filtering the list from search input
2.addCountry = used for which country we are added from child to parent
3. selectedCountry = used for displying the selected country in parent components.




