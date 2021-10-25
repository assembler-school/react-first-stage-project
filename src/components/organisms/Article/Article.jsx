import React from "react";
import PropTypes from "prop-types";

import Content from "../../molecules/Content";
import "./style.scss";

const Article = props => (
    <article className="o__article">
        <div className="poster-wrapper">
            <img className="article_featured" src={props.src} alt={props.alt} />
        </div>
        <Content text={props.text} title={props.title}/>
    </article>
);

Article.propTypes = {
    image: PropTypes.object,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
};

export default Article;