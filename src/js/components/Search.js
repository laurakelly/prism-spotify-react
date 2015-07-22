var React = require("react");
var SearchResults = require("./SearchResults");

var Search = React.createClass({
  render: function() {
    return (
      <div>
        <div id="searchBox" className="col-md-8 col-md-offset-2">
          <h1>Search for an Artist</h1>
          <form className="form-inline">
            <div className="form-group">
              <input type="text" className="form-control" id="spotifyQuery" placeholder="Search Spotify">
              </input>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>

        <SearchResults />
      </div>
    );       
  }
});

module.exports = Search;