var React = require("react");
var jquery = require('jquery');
var SearchResults = require("./SearchResults");

var Search = React.createClass({
  getInitialState: function() {
    return {userInput: "", searchResults: []};
  },
  generateQuery: function(input) {
    // Replace spaces with '%20' so Spotify can parse it
    return "q=" + input.replace(/\s/g,"%20") + "&type=artist";
  },
  handleChange: function(e) {
    this.setState({ userInput: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var query = this.generateQuery(this.state.userInput); 

    jquery.ajax({
      url: "https://api.spotify.com/v1/search?" + query,
    }).done(function(data){
      this.setState({searchResults: data.artists.items});
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        <div id="searchBox" className="col-md-8 col-md-offset-2">
          <h1>Search for an Artist</h1>
          <form className="form-inline">
            <div className="form-group">
              <input 
                type="text" 
                className="form-control" 
                id="spotifyQuery"
                placeholder="Search Spotify"
                value={this.state.userInput}
                onChange={this.handleChange}>
              </input>
            </div>
            <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
        </div>

        <SearchResults />
      </div>
    );       
  }
});

module.exports = Search;