import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import NavbarContainer from "./components/navbar/NavbarContainer";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import Footer from "./components/footer/Footer";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import NewsFeedContainer from "./components/newsFeed/NewsFeedContainer";
import PeopleContainer from "./components/people/PeopleContainer";

import {Route} from "react-router-dom";

class App extends React.Component {

    render() {

        const newsFeed = () => <NewsFeedContainer />
        const dialogs = () => <DialogsContainer />
        const people = () => <PeopleContainer />

        return (
            <div className="app">
                <Header/>
                <NavbarContainer/>
                <main className="content">
                    <Route path="/newsfeed" render={newsFeed}/>
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
