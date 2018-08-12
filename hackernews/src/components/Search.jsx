import React, { Component } from 'react';

export class SearchBar  extends Component
{
  constructor(props)
  {
    super(props)
    this.state ={ searchInput: 'React'}
    this.handleSubmit  = this.handleSubmit.bind(this);
    this.handleSearch= this.handleSearch.bind(this);
  }

  handleSearch(event) {
    //console.log(event.target.value)
    this.setState({ searchInput: event.target.value });

  }
  handleSubmit = (event) =>
  {
    event.preventDefault();
    console.log(this.state.searchInput);
    this.props.onSubmit(this.state.searchInput);
  }
  render()
  {
    return (
      <form onSubmit = {this.handleSubmit}>
        <div class="ui mini form">
          <div class="three fields">
            <div class="mini field">
              <input className="prompt" type="text"
                placeholder="Search"
                onChange={this.handleSearch}
                value={this.state.searchInput} />
            </div>
            <button class="ui mini submit button" type ="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    );

  }
}
