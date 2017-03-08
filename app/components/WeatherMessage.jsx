var React = require('react');

// instead of defining props, we can just define in the function input, see About.jsx
var WeatherMessage = ({temp, location}) => {
  
    return (
      <h3>It is {temp} in {location}.</h3>
    )
};

module.exports = WeatherMessage;
