import styles from './Users.module.css'

let Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://cdn.britannica.com/73/194473-050-57F49709/Dmitry-Medvedev-2016.jpg',
                    followed: true,
                    fullName: 'Dmitriy',
                    status: "I am a boss",
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://cdn.britannica.com/73/194473-050-57F49709/Dmitry-Medvedev-2016.jpg',
                    followed: false,
                    fullName: 'Sasha',
                    status: "I am a boss too",
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://cdn.britannica.com/73/194473-050-57F49709/Dmitry-Medvedev-2016.jpg',
                    followed: true,
                    fullName: 'Anderew',
                    status: "I am a boss too",
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="" className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;