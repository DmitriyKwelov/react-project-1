import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let  onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={ onAddPost }>add post</button>
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