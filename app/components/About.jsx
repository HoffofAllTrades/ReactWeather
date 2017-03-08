var React = require('react');

// for stateless functional components we don't need a render, we don't need the word "function" when using an arrow function
var About = (props) => {
  return (
    <h3>About Component</h3>
  )
};

module.exports = About;
