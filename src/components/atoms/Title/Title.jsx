import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Title = props => (
    <h2 className="a__title">{props.text}</h2>
);

Title.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Title;