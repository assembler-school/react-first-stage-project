import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { Redirect } from "react-router-dom";
import { authenticationService } from "../../../services";
import ButtonExtra from "../../atoms/ButtonExtra";

import CustomMovieCard from "../../organisms/CustomMovieCard";

import "./style.scss";

const MyFavMovies = () => {
    const { favorites, deleteFavorite, darkMode } = useContext(GlobalContext);

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
                    <div className="title-wrapper">
                        <h2>
                            {favorites.length} {favorites.length === 1 ? "Favorite Movie" : "Favorite Movies"}
                        </h2>
                    </div>
                    {favorites && (
                        <ul className="posts">
                            {favorites.map((favorite) => (
                                <li key={favorite.id}>
                                    <CustomMovieCard
                                        src={favorite.image}
                                        title={favorite.title}
                                        onClick={() => deleteFavorite(favorite.id)}
                                    />

                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </main>
    );
};

export default MyFavMovies;