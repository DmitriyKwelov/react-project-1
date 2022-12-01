import React from "react";
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreate(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreate());
        },
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;