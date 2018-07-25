import React, { Component } from 'react';
import './App.css';

//SearchList-Functional Stateless Components
/****
A rule of thumb is to use functional stateless components when you don’t need local 
state or component lifecycle methods.
****/
const SearchList = (props) =>
{
  const {searchlist}=props
  return (searchlist.map(el => <div className="item">{el}</div>));
  
};

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { textInput: '' }
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({ textInput: event.target.value });
    //console.log('Event:onInput= ' + event.target.value)
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.textInput)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="ui fluid category search">
          <div class="ui icon input">
            <input className="prompt" type="text"
              placeholder="Search Messages..."
              onInput={this.handleInput.bind(this)}
              value={this.state.textInput} />
            <i class="search icon"></i>
          </div>
        </div>
      </form>
    );
  }
}

class Messages extends Component {

  state = {
    searchList: ["Krishna", "Geetha", "Swathi"],
    searchResult: ''
  }

  handleChangedText = (changedText) => {
    //console.log("Event on Submit:" + changedText);
    let result = this.state.searchList.filter(word => word.toLowerCase() === changedText.toLowerCase());
    if (!result) {
      result = "Not Found";
    }
    //console.log("Search on Submit:" + result);
    this.setState({ searchResult: result });
  }

  render() {
    return (
      <div class="ui raised very padded text container segment">
        <h1> Messages</h1>
        <SearchBar
          onSubmit={this.handleChangedText} />
        <div class="ui relaxed divided list" >
          <SearchList searchlist={this.state.searchList} />
        </div>
        <div class="item">Search Found:{this.state.searchResult} </div>
      </div>
    );
  }
}
export default Messages;
