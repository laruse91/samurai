import {combineReducers, createStore} from "redux";
import newsFeedReducer from "./newsFeed-reducer";
import headerReducer from "./header-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer"
import sidebarReducer from "./sidebar-reducer"
import peopleReducer from "./people-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import graphicsReducer from "./graphics-reducer";


const reducers = combineReducers(
    {
        header: headerReducer,
        navbar: navbarReducer,
        sidebar: sidebarReducer,
        newsFeedPage: newsFeedReducer,
        dialogsPage: dialogsReducer,
        peoplePage: peopleReducer,
        profilePage: profileReducer,
        auth: authReducer,
        graphics: graphicsReducer,
    }
);

let store = createStore(reducers);
window.store = store;
export default store