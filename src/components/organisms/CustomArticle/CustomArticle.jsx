import React, { useContext } from "react";
import Article from "../Article";
import Button from "../../atoms/Button";
import { GlobalContext } from "../../../context/GlobalContext";
import { Link } from "react-router-dom";
import "./style.scss";

const CustomArticle = (props) => {

    const { favorites, displayMovieDetails } = useContext(GlobalContext);

    let addMovieToFav = favorites.find((ele) => ele.id === props.post.id);

    const addToFavDisable = addMovieToFav ? true : false;

    return (
        <div className="o__custom_article">
            <Article
                src={props.src}
                title={props.title}
                text={props.content}/>
            <Button
                text="Add to Fav"
                onClick={props.onClick}
                disabled={addToFavDisable}
            />
            <Link to="/movie-details">
                <Button
                    text="More Info"
                    onClick={() => displayMovieDetails(props)}
                />
            </Link>
        </div>
    );
};

export default CustomArticle;