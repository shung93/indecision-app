import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => ( // implicit return 
    <Modal
        isOpen={!!props.selectedOption} // can convert to a boolean type with !! > converts a string to true
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={100}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;