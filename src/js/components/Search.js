var React = require("react");
var jquery = require("jquery");
var SearchResults = require("./SearchResults");

var Search = React.createClass({
  getInitialState: function() {
    return {userInput: "", searchResults: []};
  },
  generateQuery: function(input) {
    if (input.length === 0) return null;

    // Replace spaces with '%20' so Spotify can parse it
    return "q=" + input.replace(/\s/g,"%20") + "&type=artist";
  },
  handleChange: function(e) {
    var userInput = e.target.value, 
      query = this.generateQuery(userInput); 

    this.setState({userInput: userInput})

    if (query) {
      jquery.ajax({
        url: "https://api.spotify.com/v1/search?" + query,
      }).done(function(data){
        this.setState({
          searchResults: data.artists.items,
        });
      }.bind(this));
    } else {
      this.setState({searchResults: []});
    }
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
          </form>
        </div>

        <SearchResults artists={this.state.searchResults} artistDetail={this.props.artistDetail} />
      </div>
    );       
  }
});

module.exports = Search;