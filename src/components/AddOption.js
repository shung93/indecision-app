import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    handleAddOption= (e) =>  { // this handleAddOption is bound to this AddOption method, and then the other one which is in our bigger one
        e.preventDefault();
        const option = e.target.elements.option.value.trim(); 
        const error = this.props.handleAddOption(option); // from the parent

        this.setState(() => ({error}));

        if (!error) { e.target.elements.option.value = ''; }
    }
    render () {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option" autoComplete="off"/>
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}
