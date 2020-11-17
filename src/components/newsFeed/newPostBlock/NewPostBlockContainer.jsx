import React from 'react';
import NewPostBlock from "./NewPostBlock";
import {postTextUpdateActionCreator, publicPostActionCreator} from "../../../redux/newsFeed-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newsFeedPage: state.newsFeedPage
    };
};
const mapDispatchToProps = (dispatch)=> {
    return {
        textUpdate: (text) => {
            dispatch(postTextUpdateActionCreator(text))
        },
        publicPost: () => {
            dispatch(publicPostActionCreator())
        },
    }
};

const NewPostBlockContainer = connect(mapStateToProps,mapDispatchToProps)(NewPostBlock);

export default NewPostBlockContainer;