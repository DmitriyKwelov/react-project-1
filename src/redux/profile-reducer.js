const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts:  [
        {id: 1, massage: 'Hi, how are you?', likeCount: 0},
        {id: 2, massage: 'It\'s my first post!', likeCount: 24},
    ],
    NewPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                massage: state.NewPostText,
                likeCount: 0,
            };
            state.posts.push(newPost);
            state.NewPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.NewPostText = action.NewText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreate = () => ({type: ADD_POST,})
export const updateNewPostTextActionCreate = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        NewText: text,
    }
}

export default profileReducer;