export const DEFAULT_SEARCH_TERM = 'redux';
export const BASE_PATH = 'https://hn.algolia.com/api/v1';
export const PATH_SEARCH = '/search';
export const PARAM_SEARCH = 'query=';
//const url = `${BASE_PATH}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;


export function getNewsbySearch(searchTerm){
return ( 
    fetch(`${BASE_PATH}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
            .then(resp => resp.json())
            .catch(error => error)) ;

}
