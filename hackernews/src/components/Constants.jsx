import React, { Component } from 'react';

export const DEFAULT_SEARCH_TERM = 'redux';
export const BASE_PATH = 'https://hn.algolia.com/api/v1';
export const PATH_SEARCH = '/search';
export const PARAM_SEARCH = 'query=';
export const PARAM_PAGE = 'page=';

export const HEADER =() =>{
  return(<div>
    <h3 class="ui top attached blue inverted header">
      News Aggregator
    </h3>
  </div>
);};
