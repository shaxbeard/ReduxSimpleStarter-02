import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBQeEpPgGGfDYj2XS-HKHW_7qKSTLltij4'; 

// Create a new component. This component should produce some html

const App = () => {
    return <div>Hi!</div>;
}

// Take this component's generated html and put it on the page (the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));