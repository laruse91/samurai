const ADD_POST_TEXT = 'ADD-POST-TEXT';
const PUBLIC_POST = 'PUBLIC-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
// const ADD_COMMENT_TEXT = 'ADD-COMMENT-TEXT';
// const ADD_COMMENT = 'ADD-COMMENT';

const initialState = {
    profile : null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_TEXT:
            return {
                ...state,
                newPost: action.newPostText,
            };
        case PUBLIC_POST:
            const newPost = {
                id: '003',
                user: {
                    name: state.currentUser.name,
                    lastName: state.currentUser.lastName,
                    photo: state.currentUser.photo,
                },
                time: '15:22',
                content: state.newPost,
                contentMedia: '',
                contentMedia1: '',
                contentMedia2: '',
                likesCount: 0,
                shareCount: 0,
                commentsCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPost: '',
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        // case ADD_COMMENT_TEXT:
        //
        //     stateCopy.newComment = action.newCommentText;
        //     return stateCopy;
        //
        // case ADD_COMMENT:
        //     const newComment = {
        //         name: state.comments.currentUser.name,
        //         lastName: state.comments.currentUser.lastName,
        //         id: '002',
        //         photo: state.comments.currentUser.photo,
        //         content: state.newComment,
        //     };
        //     stateCopy.messages.push(newComment);
        //     stateCopy.newComment = '';
        //     return stateCopy;
        default:
            return state;
    }
};

export const postTextUpdate = (text) => ({
    type: ADD_POST_TEXT,
    newPostText: text,
});
export const publicPost = () => ({type: PUBLIC_POST});
export const setUserProfile = (profile)=> ({
    type: SET_USER_PROFILE,
    profile
})
// export const commentTextUpdate = (text) => ({
//     type: ADD_COMMENT_TEXT,
//     newCommentText: text,
// });
// export const addComment = () => ({type: ADD_COMMENT});


export default profileReducer;