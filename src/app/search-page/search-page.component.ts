import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  hitsPerPage;
  pageIndex;
  searchBaseURL : "https://hn.algolia.com/api/v1/search";
  searchResults;

  constructor(private http : HttpClient) { 

    this.hitsPerPage = 10;
    this.pageIndex = 0;
    this.searchResults = [];
  }

  ngOnInit() {
  
  }

  fetchSearchResults(searchValue){

    let params: URLSearchParams = new URLSearchParams();
    params.set("query", searchValue);
    params.set("hitsPerPage", this.hitsPerPage);
    params.set("page", this.pageIndex);
    //params.set("surname", surname); for more params
    let options;
    options.search = params;

    return this.http.get(this.searchBaseURL, options).subscribe(users => {
      this.searchResults = users;
    });
        
  }  

}