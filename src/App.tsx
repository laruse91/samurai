import React from 'react';
import './App.css';
import NavbarContainer from './components/navbar/NavbarContainer';
import SidebarContainer from './components/sidebar/SidebarContainer';
import Footer from './components/footer/Footer';
import NewsFeedContainer from './components/newsFeed/NewsFeedContainer';
import PeopleContainer from './components/people/PeopleContainer';
import HeaderContainer from './components/header/HeaderContainer';
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import {withReactSuspense} from "./components/hoc/withReactSuspense";
import {TGlobalState} from "./redux/redux-store";

// React.lazy , Suspense
const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));

const Login = React.lazy(() => import('./components/login/Login'));

const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));


type TStateProps = {
    initialized: boolean
}
type TDispatchProps = {
    initializeApp: () => void
}
type TOwnProps = {}
type TProps = TStateProps & TDispatchProps

class App extends React.Component<TProps> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        const newsFeed = () => <NewsFeedContainer/>
        const profile = withReactSuspense(() => <ProfileContainer/>)
        const dialogs = withReactSuspense(() => <DialogsContainer/>)
        const people = () => <PeopleContainer/>
        const login = withReactSuspense(() => <Login/>)

        if (!this.props.initialized) {
            return <Preloader/>

        }
        return (
            <div className='app'>
                <HeaderContainer/>
                <NavbarContainer/>
                <main className='content'>
                    <Route path='/' render={() => <Redirect to={"/profile"}/>}/>
                    <Route path='/newsfeed' render={newsFeed}/>
                    <Route path='/profile/:userId?' render={profile}/>
                    <Route path='/dialogs' render={dialogs}/>
                    <Route path='/people' render={people}/>
                    <Route path='/login' render={login}/>
                </main>
                <SidebarContainer/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state: TGlobalState) => {
    return {
        initialized: state.app.initialized,
    }
}

export default connect<TStateProps, TDispatchProps, TOwnProps, TGlobalState>(mapStateToProps, {initializeApp})(App);
