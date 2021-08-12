import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);

    this.setState({ term: "" });
  };

  searchAfterClick = (event) => {
    if (this.state.term.length > 0) {
      return this.onFormSubmit;
    }
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="ui left icon input">
          <i className="search icon" onClick={this.searchAfterClick}></i>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            placeholder="Search for college"
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
