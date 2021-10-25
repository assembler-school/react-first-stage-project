import React from "react";
import PropTypes from "prop-types";

const Input = props => (
    <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className="a__input"
    />
);

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
};

export default Input;