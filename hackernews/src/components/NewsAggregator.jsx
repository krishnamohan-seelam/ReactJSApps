import React, { Component } from 'react';
import {SearchBar} from  './Search';
import {ResultSet} from  './Results';
import {DEFAULT_SEARCH_TERM,BASE_PATH,PATH_SEARCH,PARAM_SEARCH,PARAM_PAGE} from './Constants';
class NewsAggregator extends Component
{

  constructor(props)
  {
    super(props);
    this.state ={searchResults:null}
    this.getSearchRequest = this.getSearchRequest.bind(this);
  }

  getSearchRequest=(searchRequest) =>
  {
    console.log("getSearchRequest :" +searchRequest)

    this.fetchResultsfromApi(searchRequest).then(
       responseData =>
       {  
         this.setState({searchResults:responseData});
       }
    );

  }

  fetchResultsfromApi(searchRequest)
  {
    return fetch(`${BASE_PATH}${PATH_SEARCH}?${PARAM_SEARCH}${searchRequest}`)
    .then(resp => resp.json())
    .then(responseData => {return responseData; })
    .catch(error => error)
  }

  render()
  {
    return(
      <div>
        <SearchBar onSubmit = {this.getSearchRequest} />
        <br/>
        {
           this.state.searchResults  ?
          <ResultSet results = { this.state.searchResults}/>: "No Results "
          }
        </div>
      );
    }


  }

  export default NewsAggregator;
