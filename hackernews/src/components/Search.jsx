import React, { Component } from 'react';

export class SearchBar  extends Component
{
  constructor(props)
  {
    super(props)
    this.state ={ searchInput: 'React' ,}
    this.handleSubmit  = this.handleSubmit.bind(this);
    this.handleSearch= this.handleSearch.bind(this);

  }

  handleSearch(event) {

    this.setState({ searchInput: event.target.value });

  }
  handleSubmit = (event) =>
  {
    event.preventDefault();
    const btn = event.target;
    let nextPage = this.props.page;

    //console.log(`The user clicked ${btn.name}: ${btn.value}`);
    switch (btn.value) {
      case "fetch":
      nextPage = 0;
      break;
      case "next":
      nextPage = nextPage + 1;
      break;
      default:

    }

    this.props.onSubmit(this.state.searchInput,nextPage);
  }

  render()
  {
    //console.log(`calling SearchBar render for page:${this.props.page}`);
    console.log(`Inside Search ${this.props.disableNext}`)
    return (
      <form >
        <div class="ui mini form">
        <div class="three fields">
            <div class="mini field">
              <input className="prompt" type="text"
                placeholder="Search"
                onChange={this.handleSearch} name ="searchInput"
                value={this.state.searchInput} />
            </div>
            <button class="ui mini submit button" type ="submit"
              name ="Fetch" value ="fetch" onClick= {this.handleSubmit}>
              Fetch
            </button>
            <button class="ui mini submit button"
              type ="submit"
              name ="Next" value ="next" onClick = {this.handleSubmit}>
              Next
            </button>
            <div class="ui label">Page
              <div class="detail">{this.props.page}</div>
            </div>

            </div>
        </div>
      </form>
    );

  }
}
