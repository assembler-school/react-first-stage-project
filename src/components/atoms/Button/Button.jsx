import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Button = props => (
    <button
        className="a__button"
        onClick={props.onClick}
        disabled={props.disabled}
    >
        {props.text}
    </button>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;