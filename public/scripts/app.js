'use strict';

// JSX - JavaScript XML
// to get started with babel:  babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// to have babel watch for changes: babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// start a live server for working on this: live-server public 
// to reinstall all your things based on the package.json > yarn install
// ternary: true ? 'Andrew' : undefined

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer wew lads.',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your options:' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            '1'
        ),
        React.createElement(
            'li',
            null,
            '2'
        ),
        React.createElement(
            'li',
            null,
            '3'
        )
    )
);

var user = {
    name: 'Shmuel',
    age: 261,
    location: 'Vancouver'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    } // if no location > return undefined > which is nothing at all
}
// ternary is good if you want to do 1 of 2 things
// the logical && operator is good if you want to only do ONE thing, else nothing at all 
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name.toUpperCase() + '!!!' : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        ' Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
