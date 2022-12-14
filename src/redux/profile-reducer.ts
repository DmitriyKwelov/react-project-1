import {profileAPI, userAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";


let initialState = {
    posts: [
        {id: 1, massage: 'Hi, how are you?', likeCount: 0},
        {id: 2, massage: 'It\'s my first post!', likeCount: 24},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}

export type  InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {
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
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        default:
            return state;
    }
}

type  AddPostActionCreateActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreate = (newPostText: string): AddPostActionCreateActionType => ({type: ADD_POST, newPostText})
type SetUsersProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUsersProfile = (profile: ProfileType): SetUsersProfileActionType => ({type: SET_USER_PROFILE, profile})
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})
type DeletePostActionType = {
    type: typeof DELETE_POST
    PostId: number
}
export const deletePost = (PostId: number): DeletePostActionType => ({type: DELETE_POST, PostId})
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUsersProfile = (userId: number) => async (dispatch: any) => {
    let response = await userAPI.getProfile(userId)
    dispatch(setUsersProfile(response.data));
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error){
        //
    }
}
export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data));
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)
    dispatch(savePhotoSuccess(response.data.data.photos));
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile)
    if(response.data.resultCode === 0) {
        dispatch(getUsersProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0]);
    }
}


export default profileReducer;