import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const ButtonExtra = props => (
    <button
        className="a__button_extra"
        onClick={props.onClick}
        disabled={props.disabled}
    >
        {props.text}
    </button>
);

ButtonExtra.propTypes = {
    text: PropTypes.string.isRequired,
};

export default ButtonExtra;