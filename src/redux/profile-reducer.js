import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST"

let initialState = {
    posts: [
        {id: 1, massage: 'Hi, how are you?', likeCount: 0},
        {id: 2, massage: 'It\'s my first post!', likeCount: 24},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return  {
                ...state,
                posts: [...state.posts, {id: 5, massage: action.newPostText, likeCount: 0,}],
                newPostText: '',
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.PostId)}
        }
        default:
            return state;
    }
}

export const addPostActionCreate = (newPostText) => ({type: ADD_POST, newPostText})
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (PostId) => ({type: DELETE_POST, PostId})

export const getUsersProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId)
        .then(data => {
            dispatch(setUsersProfile(data));
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if(data.resultCode === 0){
                dispatch(setStatus(status));
            }
        })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
        })
}

export default profileReducer;