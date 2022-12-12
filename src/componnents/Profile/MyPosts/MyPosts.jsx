import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm";

const MyPosts = React.memo(props => {
    console.log(props)
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {
                    props.posts.map(p =>
                        <Post massage={p.massage} likeCount={p.likeCount}/>
                    )
                }
            </div>
        </div>
    )
});

export default MyPosts;