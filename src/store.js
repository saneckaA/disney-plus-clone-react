import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./features/user/userSlice";
import movieReducer from "./features/movie/movieSlice";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: [sagaMiddleware],
});
