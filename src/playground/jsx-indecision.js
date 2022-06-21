// JSX - JavaScript XML
// to get started with babel:  babel src/app.js --out-file=public/scripts/app.js --presets=env,react
// to have babel watch for changes: babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// start a live server for working on this: live-server public 
// to reinstall all your things based on the package.json > yarn install
// ternary: true ? 'Andrew' : undefined

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer wew lads.',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value; 

    if (option) { // an empty string is FALSY > so it won't run still, but something to note 
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}; 

const reset = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? `Here are your options:` : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={reset}>Reset</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>Option: {option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

render();