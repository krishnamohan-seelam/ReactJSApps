import React, { Component } from 'react';
import './semantic-ui-css/semantic.css';
import NewsAggregator from './GetNews.js';
import { getNewsbySearch,DEFAULT_SEARCH_TERM ,BASE_PATH,PATH_SEARCH,PARAM_SEARCH} from './utils/fetchapi.js';

const TitleBar = props => {
    return (
        <div>
            <h2 className="ui center aligned icon header">
                <i className="circular newspaper outline icon"></i>
                Hacker News
        </h2>
        </div>)
};

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { searchInput: 'redux', }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
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
            <div className="ui right aligned category search">
                <div className="ui huge icon input">
                    <input className="prompt" type="text" placeholder="Search..."
                        onChange={this.handleSearch}
                        onKeyPress={this.handleKeyPress}
                        value={this.state.searchInput} />
                    <i className="search icon"></i>
                </div>
            </div>
        );
    }
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { searchTerm: DEFAULT_SEARCH_TERM, result: null }
   
    }

    componentDidMount() {
        getNewsbySearch(this.state.searchTerm)
            .then(responseData => this.setState({ result: responseData }));
    }

    
    loadData(searchTerm) {
        //console.log("Search Term :" + searchTerm);
       fetch(`${BASE_PATH}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
            .then(resp => resp.json())
            .then(responseData => {
                this.setState({ result: responseData });
            })
            .catch(error => error)
    }

    handleKeyPress= (searchInput)=>
    {
        this.loadData(searchInput);
    }


    render() {
        return (<div>
            <TitleBar />
            <SearchBar onKeyPress={this.handleKeyPress} />
            <NewsAggregator searchTerm={this.state.searchTerm}
                result={this.state.result} />
        </div >
        );
    }
}

export default App;