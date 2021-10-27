import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { Redirect } from "react-router-dom";
import { authenticationService } from "../../../services";

import CustomArticle from "../../organisms/CustomArticle";
import ButtonExtra from "../../atoms/ButtonExtra";

import "./style.scss";

// addToFavList
function Home() {
    const { posts, darkMode, addToFavList } = useContext(GlobalContext);

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
                            {posts && posts.length} {posts.length === 1 ? "Movie" : "Movies"}
                        </h2>
                    </div>
                    {posts && (
                        <ul className="posts">
                            {posts.map((post) => (
                                <li key={post.id}>
                                    <CustomArticle
                                        post={post}
                                        src={post.image}
                                        title={post.title}
                                        content={post.description}
                                        text="Add to Fav"
                                        onClick={() => addToFavList(post)}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </main>
    );
}

export default Home;