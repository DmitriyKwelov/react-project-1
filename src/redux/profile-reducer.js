import {userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        {id: 1, massage: 'Hi, how are you?', likeCount: 0},
        {id: 2, massage: 'It\'s my first post!', likeCount: 24},
    ],
    newPostText: '',
    profile: null
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
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreate = () => ({type: ADD_POST,})
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUsersProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId)
        .then(data => {
            dispatch(setUsersProfile(data));
        })
}
export const updateNewPostTextActionCreate = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export default profileReducer;