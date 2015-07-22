var React = require("react");
var jquery = require('jquery');
var Search = require("./Search");
var Artist = require("./Artist");

var Main = React.createClass({
  getInitialState: function() {
    return {route: "search", selectedArtist: {}, topSongs: {}};
  },
  updateRoute: function(route) {
    this.setState({route: route});
  },
  artistDetail: function(artist) {
    // Fetch artist's top songs and switch routes
    console.log(artist)
    var topSongsUrl = "https://api.spotify.com/v1/artists/" + artist.id + "/top-tracks?country=US";

    jquery.get(topSongsUrl, function(data) {
      this.setState({ selectedArtist: artist, topSongs: data.tracks })
      this.updateRoute("artist")
    }.bind(this));
  },
  render: function() {
    if (this.state.route === "search") {
      return (
        <Search artistDetail={this.artistDetail} />
      );
    } else if (this.state.route === "artist") {
      return (
        <Artist artist={this.state.selectedArtist} topSongs={this.state.topSongs} />
      );
    }
  }
});

module.exports = Main;