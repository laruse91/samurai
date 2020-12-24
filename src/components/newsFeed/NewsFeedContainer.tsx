import './NewsFeed.css'
import newsFeed from "./NewsFeed";
import {connect} from "react-redux";
import {actions} from "../../redux/newsFeed-reducer";
import {TGlobalState} from "../../redux/redux-store";

type TStateProps = {
    posts: any
    currentUser: any
}
type TDispatchProps = {
    publicNewPost: (newPostBody: string)=>void
}
type TOwnProps = {}

const mapStateToProps = (state: TGlobalState): TStateProps => {
    return {
        posts: state.newsFeedPage.posts,
        currentUser: state.newsFeedPage.currentUser,
    }
};

const newsFeedContainer = connect<TStateProps, TDispatchProps, TOwnProps, TGlobalState>(mapStateToProps, {publicNewPost: actions.publicNewPost})(newsFeed);

export default newsFeedContainer