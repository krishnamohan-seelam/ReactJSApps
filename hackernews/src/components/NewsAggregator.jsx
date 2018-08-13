import React, { Component } from 'react';
import {SearchBar} from  './Search';
import {ResultSet} from  './Results';
import {BASE_PATH,PATH_SEARCH,PARAM_SEARCH,PARAM_PAGE} from './Constants';
class NewsAggregator extends Component
{

  constructor(props)
  {
    super(props);
    this.state ={searchResults:null }
    this.getSearchRequest = this.getSearchRequest.bind(this);
  }

  getSearchRequest=(searchRequest,page) =>
  {
    console.log(`getSearchRequest ${searchRequest} for page:${page}`)

    this.fetchResultsfromApi(searchRequest,page).then(
      responseData =>
      {
        this.setState({searchResults:responseData});
      }
    );

  }

  fetchResultsfromApi(searchRequest,page)
  {
    return fetch(`${BASE_PATH}${PATH_SEARCH}?${PARAM_SEARCH}${searchRequest}&${PARAM_PAGE}${page}`)
    .then(resp => resp.json())
    .then(responseData => {return responseData; })
    .catch(error => error)
  }

  render()
  {
    let page = (this.state.searchResults && this.state.searchResults.page) || 0;
    let disableNext  =  page > 0 ? false: true ;
    
    return(
      <div>
        <SearchBar onSubmit = {this.getSearchRequest}  page ={page} disableNext ={disableNext} />
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
