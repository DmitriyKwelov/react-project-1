import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
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