import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // importing App component
import RecipeTitle from './RecipeTitle';
// render takes two parameters, the html we want to display, and html element we wnat to use to display our html//
ReactDOM.render( // jsx uses xml syntax so must lose the App tag />
    <App />,
    document.getElementById('app')
);