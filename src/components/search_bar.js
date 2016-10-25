import React, { Component } from 'react';

// this is a functional component (stuff goes in stuff comes out)
// const SearchBar = () => {
//     return <input />
// };

// class SearchBar extends Component {
//     render() {
//         return <input onChange={this.onInputChange} />;
//     }

//     onInputChange(event) {
//         console.log(event.target.value);
//     }
// }

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            term: '' 
        };
    }

    onInputChange(term) {
        this.setState({term});
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