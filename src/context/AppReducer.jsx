const AppReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                error: "",
                posts: action.payload,
            }
        case "FETCH_FAILURE":
            return {
                ...state,
                loading: true,
                error: "Something went wrong",
                post: [],
            }
        case "ADD_TO_FAV_LIST":
            return {
                ...state,
                loading: false,
                error: "",
                favorites: [action.payload, ...state.favorites],
            }
        case "DELETE_FAV_LIST":
            return {
                ...state,
                loading: false,
                error: "",
                favorites: state.favorites.filter(ele => ele.id !== action.payload),
            }
        case "DISPLAY_MOVIE_DETAILS":
            return {
                ...state,
                loading: false,
                error: "",
                post: action.payload,
            }
        case "DARK_MODE":
            return {
                ...state,
                darkMode: true
            }
        case "LIGHT_MODE":
            return {
                ...state,
                darkMode: false
            }
        default:
            return state;
    }
};

export default AppReducer;