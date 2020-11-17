import React from 'react';
import './NewsFeed.css'
import newsFeed from "./NewsFeed";
import {connect} from "react-redux";
import {postTextUpdateActionCreator, publicPostActionCreator} from "../../redux/newsFeed-reducer";

const mapStateToProps = (state) => {
    return {
        posts: state.newsFeedPage.posts,
        newPost: state.newsFeedPage.newPost,
        currentUser: state.newsFeedPage.currentUser,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        textUpdate: (text) => {
            dispatch(postTextUpdateActionCreator(text))
        },
        publicPost: () => {
            dispatch(publicPostActionCreator())
        },
    }
};

const newsFeedContainer = connect(mapStateToProps, mapDispatchToProps)(newsFeed);

export default newsFeedContainer