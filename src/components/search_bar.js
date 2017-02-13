import React, { Component } from 'react';

/**
 *  SearchBar class component
 *    -> Search for Youtube videos by user input
 */
class SearchBar extends Component {
  constructor(props) {
    super(props);

    // Initial state is blank
    this.state = {
      term: ''
    };
  }

  // Set the state of the search term with each key press
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="input-group search-bar">
        <span className="input-group-addon" id="basic-addon1">
          <span className="glyphicon glyphicon-search"></span>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search videos..."
          aria-describedby="basic-addon1"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          />
      </div>
    );
  }
}

export default SearchBar;