import React from 'react';
import './NewsFeed.css'
import newsFeed from "./NewsFeed";
import {connect} from "react-redux";
import {publicNewPost} from "../../redux/newsFeed-reducer";

const mapStateToProps = (state) => {
    return {
        posts: state.newsFeedPage.posts,
        currentUser: state.newsFeedPage.currentUser,
    }
};

const newsFeedContainer = connect(mapStateToProps, {publicNewPost})(newsFeed);

export default newsFeedContainer