const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, massage: 'Hi, how are you?', likeCount: 0},
        {id: 2, massage: 'It\'s my first post!', likeCount: 24},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return  {
                ...state,
                posts: [...state.posts, {id: 5, massage: state.newPostText, likeCount: 0,}],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreate = () => ({type: ADD_POST,})
export const updateNewPostTextActionCreate = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export default profileReducer;