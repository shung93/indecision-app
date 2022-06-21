// JSX - JavaScript XML
// to get started with babel:  babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// to have babel watch for changes: babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// start a live server for working on this: live-server public 
// to reinstall all your things based on the package.json > yarn install
// ternary: true ? 'Andrew' : undefined

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer wew lads.',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options && app.options.length > 0 ? `Here are your options:` : 'No options'}</p>
        <ol>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ol>
    </div>
); 

const user = {
    name: 'Shmuel',
    age: 261,
    location: 'Vancouver'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } // if no location > return undefined > which is nothing at all
}
// ternary is good if you want to do 1 of 2 things
// the logical && operator is good if you want to only do ONE thing, else nothing at all 
const templateTwo = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() + '!!!' : 'Anonymous'}</h1> 
        {(user.age && user.age >= 18) && <p> Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);