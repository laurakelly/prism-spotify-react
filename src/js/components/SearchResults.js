var React = require("react");

var Result = React.createClass({
  render: function() {
    return (
      <li>
        <img />
        <p>Artist Name</p>
      </li>
    );
  }
});

var SearchResults = React.createClass({
  render: function() {
    return (
      <div id="searchResults" className="col-md-8 col-md-offset-2">
        <ul>
          <Result />
        </ul>
      </div>
    );
  }
});

module.exports = SearchResults;