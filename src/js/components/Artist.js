var React = require('react');

var Song = React.createClass({
  render: function() {
    return (
      <li key={this.props.song.id}>
        <a href={this.props.song.href}>{this.props.song.name}</a>
        <p>Album: {this.props.song.album.name}</p>
      </li>
    );
  } 
});

var Artist = React.createClass({
  render: function() {
    var songs = [];

    for (var i=0; i<this.props.topSongs.length; i++){
      songs.push(<Song song={this.props.topSongs[i]} />)
    }

    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.props.artist.name}</h1>
        <ol>
          {songs}
        </ol>
      </div>
    );
  }
});

module.exports = Artist;