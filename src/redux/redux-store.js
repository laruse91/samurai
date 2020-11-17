import {combineReducers, createStore} from "redux";
import newsFeedReducer from "./newsFeed-reducer";
import headerReducer from "./header-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer"
import sidebarReducer from "./sidebar-reducer"
import peopleReducer from "./people-reducer";


const reducers = combineReducers(
    {
        header: headerReducer,
        navbar: navbarReducer,
        sidebar: sidebarReducer,
        newsFeedPage: newsFeedReducer,
        dialogsPage: dialogsReducer,
        peoplePage: peopleReducer,
    }
);

let store = createStore(reducers);

export default store