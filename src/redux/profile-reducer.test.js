import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 2, message: 'Blabla', likesCount: 11},
        {id: 2, message: 'Dada', likesCount: 5}
    ]
}

test('length of posts should incremented', () => {
    // 1. start data
    let action = addPost("it-kamasutra.com")
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    // 1. start data
    let action = addPost("it-kamasutra.com")
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[4].message).toBe("it-kamasutra.com");
});

test('after deleting length of posts should be decrement', () => {
    // 1. start data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. start data
    let action = deletePost(1000)
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

