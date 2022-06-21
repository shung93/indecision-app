class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: [],
        };
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // do nothing if error > fall back to the default options 
        }
    }
    componentDidUpdate(prevProps, prevState) { // fires even if there are no changes to the previous
        if (prevState.options.length !== this.state.options.length) { // but this will check to make sure something has changed 
            const json = JSON.stringify(this.state.options); // if change in length, then save as json
            localStorage.setItem('options', json); // save json to local storage
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    handleDeleteOptions() {
        this.setState(() => ({options: []})); // arrow function return an object > wrap it in a parentheses 
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum])
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }
    render () {
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                /> 
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};

const Option = (props) => { // this is referenced and used in 'Options'
    return (
        <div> 
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText); // we explicitly pass in the optionText as what we need to delete
                }}
            >
                Remove
            </button>
        </div>
    )
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined,
        };
    }
    handleAddOption(e) { // this handleAddOption is bound to this AddOption method, and then the other one which is in our bigger one
        e.preventDefault();
        const option = e.target.elements.option.value.trim(); 
        const error = this.props.handleAddOption(option); // from the parent

        this.setState(() => ({error}));

        if (!error) { e.target.elements.option.value = ''; }
    }
    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" autoComplete="off"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));