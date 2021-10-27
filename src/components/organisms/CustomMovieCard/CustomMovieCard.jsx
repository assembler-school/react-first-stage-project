import React from "react";
import PropTypes from "prop-types";

import Content from "../../molecules/Content";
import Button from "../../atoms/Button";
import "./style.scss";

const CustomMovieCard = props => (
    <article className="o__movie_card">
        <div className="poster-wrapper">
            <img className="article_featured" src={props.src} alt={props.alt} />
        </div>
        <Content text={props.text} title={props.title}/>
        <Button text="Delete" onClick={props.onClick}/>
    </article>
);

CustomMovieCard.propTypes = {
    image: PropTypes.object,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
};

export default CustomMovieCard;