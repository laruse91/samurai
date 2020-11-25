import React from "react";
import "./App.css";
import NavbarContainer from "./components/navbar/NavbarContainer";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import Footer from "./components/footer/Footer";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import NewsFeedContainer from "./components/newsFeed/NewsFeedContainer";
import PeopleContainer from "./components/people/PeopleContainer";
import ProfileContainer from "./components/profile/ProfileContainer";

import {Route} from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";

class App extends React.Component {

    render() {

        const newsFeed = () => <NewsFeedContainer />
        const profile =() => <ProfileContainer />
        const dialogs = () => <DialogsContainer />
        const people = () => <PeopleContainer />

        return (
            <div className="app">
                <HeaderContainer/>
                <NavbarContainer/>
                <main className="content">
                    <Route path="/newsfeed" render={newsFeed}/>
                    <Route path="/profile/:userId" render={profile}/>
                    <Route path="/dialogs" render={dialogs}/>
                    <Route path="/people" render={people}/>
                </main>
                <SidebarContainer/>
                <Footer/>
            </div>
        );
    }
}

export default App;
