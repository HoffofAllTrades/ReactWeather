var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Welcome to the about page!</p>
      <p>
        Here are some of teh tolls I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react"> React </a> - This was the javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Use for weather api
        </li>

      </ul>
    </div>
  )
};

module.exports = About;
