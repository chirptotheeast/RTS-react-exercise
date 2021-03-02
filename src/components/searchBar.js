import React, { Component } from "react";

export default class searchBar extends Component {
  state = {
    user_input: "",
    results: []
  };

  callApi = (e) => {
      e.preventDefault()
    fetch(`http://hn.algolia.com/api/v1/search?query=${this.state}`)
      .then((res) => res.json())
      .then((data) =>
        //   data.hits.map((hit) => {
        //     return (
        //      <ul key={hit.title}>
        //          <li>{hit.title}</li>
        //      </ul>   
        //     )
        //   })
          this.setState({results: data.hits})
      );
  };

  render() {
      console.log(this.state.results);
    return (
      <div>
        <form onSubmit={this.callApi}>
          <input
            type="text"
            placeholder="Search Hacker News"
            onChange={(e) => this.setState({ user_input: e.target.value })}
          />
          <input type="submit" value="Submit" />
        </form>

        {this.state.results.map((result, index) => {
           return (
             <ul>
               <li key={`title-${index}`}>{result.title}</li>
             </ul>
           );
        })}
      </div>
    );
  }
}
