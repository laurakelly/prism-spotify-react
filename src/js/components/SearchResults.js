var React = require("react");

var Result = React.createClass({
  handleClick: function(e) {
    this.props.artistDetail(this.props.artist);
  },
  render: function() {
    return (
      <li>
        <a artistId={this.props.artist.id} onClick={this.handleClick} >
            {this.props.artist.name}
        </a>
      </li>
    );
  }
});

var SearchResults = React.createClass({
  render: function() {
    var results = [];

    for (var i = 0; i < this.props.artists.length; i++) {
      results.push(<Result artist={this.props.artists[i]} artistDetail={this.props.artistDetail} />);
    }

    return (
            <div id="searchResults" className="col-md-8 col-md-offset-2">
        <ul>
          {results}
        </ul>
      </div>
    );
  }
});

module.exports = SearchResults;