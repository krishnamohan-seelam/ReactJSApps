import React, { Component } from 'react';
import './semantic-ui-css/semantic.css'
import NewsAggregator from './GetNews.js'

const DEFAULT_QUERY = 'redux';
const BASE_PATH = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const url = `${BASE_PATH}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;

const TitleBar = () => {
    return (
        <div>
            <h2 class="ui center aligned icon header">
                <i class="circular newspaper outline icon"></i>
                Hacker News
        </h2>

        </div>
    )

};

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { searchInput: 'redux' ,}
        this.handleSearch =this.handleSearch.bind(this);
        this.handleKeyPress =this.handleKeyPress.bind(this);
    }

    handleSearch(event) {
        this.setState({ searchInput: event.target.value });
       
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            //console.log('enter key pressed :'+ this.state.searchInput);
            this.props.onKeyPress(this.state.searchInput)
          }
    }
    render() {
        return (
            <div class="ui right aligned category search">
             
                <div class="ui icon input">
                    <input class="prompt" type="text" placeholder="Search..."
                        onChange={this.handleSearch}
                        onKeyPress ={ this.handleKeyPress}
                        value={this.state.searchInput} />
                    <i class="search icon"></i>
                </div>
                 
            </div>
        );
    }
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { searchTerm: DEFAULT_QUERY, result: null }
         
    }

    componentDidMount() {
        this.loadData(this.state.searchTerm);
    }
    handleKeyPress= (searchInput)=>
    {
        this.loadData(searchInput);
    }
    loadData(searchTerm) {
        console.log("Search Term :" + searchTerm);
        fetch(`${BASE_PATH}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
            .then(resp => resp.json())
            .then(responseData => {
                this.setState({ result: responseData });
            })
            .catch(error => error)

        //console.log(this.state.result);
    }


    render() {

        return (<div>
            <TitleBar />
            <SearchBar onKeyPress = { this.handleKeyPress}/>
            <NewsAggregator searchTerm={this.state.searchTerm}
                result={this.state.result} />
           </div>
        );
    }
}

export default App;