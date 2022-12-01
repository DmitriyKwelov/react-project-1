import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addPostActionCreate, updateNewPostTextActionCreate} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreate());
    }

    let  onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreate(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.NewPostText}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {
                    props.posts.map(p =>
                        <Post massage={p.massage} likeCount={p.likeCount} />
                    )
                }
            </div>
        </div>
    )
}

export default MyPosts;