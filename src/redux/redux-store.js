import {applyMiddleware, combineReducers, createStore} from 'redux';
import newsFeedReducer from './newsFeed-reducer';
import headerReducer from './header-reducer';
import dialogsReducer from './dialogs-reducer';
import navbarReducer from './navbar-reducer'
import sidebarReducer from './sidebar-reducer'
import peopleReducer from './people-reducer';
import profileReducer from './profile-reducer';
import authReducer from './auth-reducer';
import graphicsReducer from './graphics-reducer';
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';


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
        form: formReducer,

        graphics: graphicsReducer,
    }
);

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store