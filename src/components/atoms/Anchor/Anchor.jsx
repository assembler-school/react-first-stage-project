import React from "react";
import PropTypes from "prop-types";

const Anchor = (props) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className="a__anchor">{props.text}</a>
);

Anchor.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Anchor;