import profileReducer, {addPostActionCreate, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, massage: 'Hi, how are you?', likeCount: 0},
        {id: 2, massage: 'It\'s my first post!', likeCount: 24},
    ]
}

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreate("bla-bla")
    // 2. action
    let newState = profileReducer(state, action);
    // 3.expectation
    expect(newState.posts.length).toBe(3);
});
test('message of new  post should be correct', () => {
    // 1. test data
    let action = addPostActionCreate("bla-bla");
    // 2. action
    let newState = profileReducer(state, action);
    // 3.expectation
    expect(newState.posts[2].massage).toBe("bla-bla");
});
test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3.expectation
    expect(newState.posts.length).toBe(1);
});
test(`after deleting length shouldn't be decrement if is id incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);
    // 2. action
    let newState = profileReducer(state, action);
    // 3.expectation
    expect(newState.posts.length).toBe(2 );
});