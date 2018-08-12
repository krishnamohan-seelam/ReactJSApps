export const DEFAULT_SEARCH_TERM = 'redux';
export const BASE_PATH = 'https://hn.algolia.com/api/v1';
export const PATH_SEARCH = '/search';
export const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
//const url = `${BASE_PATH}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;


export function getNewsbySearch(searchTerm,page = 0){
return (
    fetch(`${BASE_PATH}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}${PARAM_PAGE}${page}`)
            .then(resp => resp.json())
            .catch(error => error)) ;

}
