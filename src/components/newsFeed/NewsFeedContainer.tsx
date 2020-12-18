import './NewsFeed.css'
import newsFeed from "./NewsFeed";
import {connect} from "react-redux";
import {publicNewPost} from "../../redux/newsFeed-reducer";
import {TGlobalState} from "../../redux/redux-store";

type TStateProps = {
    posts: any
    currentUser: any
}
type TDispatchProps = {
    publicNewPost: (newPostBody: string)=>void
}
const mapStateToProps = (state: TGlobalState): TStateProps => {
    return {
        posts: state.newsFeedPage.posts,
        currentUser: state.newsFeedPage.currentUser,
    }
};

const newsFeedContainer = connect<TStateProps, TDispatchProps, null, TGlobalState>(mapStateToProps, {publicNewPost})(newsFeed);

export default newsFeedContainer