import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { authenticationService } from "../../../services";


import ButtonExtra from "../../atoms/ButtonExtra";

import "./style.scss";


function MovieDetails() {
    const { darkMode, post } = useContext(GlobalContext);
    // console.log(post);

    const logout = () => {
        console.log("logout");
        authenticationService.logout();
        return <Redirect to="/" />;
    };

    return (
        <main className={`main ${darkMode ? "bg-dark" : "bg-light"}`}>
            <div className="container">
                <ButtonExtra text="LogOut" onClick={logout} />
                <div className="display-content">
                    <div className="info-wrapper">
                        <div className="title-wrapper">
                            <h1>{post && post.title}</h1>
                        </div>
                        <div className="content-wrapper">
                            <div className="img-wrapper">
                                <img className="a__image" src={post.post.movie_banner} alt={post.title} />
                            </div>
                            <div className="info-wrapper">
                                <h3>Director: <span>{post.post.director}</span></h3>
                                <p>Release Date: <span>{post.post.release_date}</span></p>
                                <p>Running time: <span>{post.post.running_time}</span> minutes</p>
                                <p>Rating score: <span>{post.post.rt_score}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="content-wrapper">
                        <h3>Description: </h3>
                        <p>{post.post.description}</p>
                    </div>
                    <Link to="/">
                        <ButtonExtra
                            text="Back to Homepage"
                        />
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default MovieDetails;