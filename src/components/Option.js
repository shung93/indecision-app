import React from 'react'; 

const Option = (props) => ( // this is referenced and used in 'Options'
    <div className='option'>
        <p className='option__text'>{props.count}. {props.optionText}</p>
        <button 
            className='button button--link'
            onClick={(e) => {
                props.handleDeleteOption(props.optionText); // we explicitly pass in the optionText as what we need to delete
            }}
        >
            Remove
        </button>
    </div>
);

export default Option;