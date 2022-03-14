
type FriendsType = {
    id: number
    name: string
}
let initialState =  {
    friends: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'}
    ] as Array<FriendsType>
}

type InitialStateType = typeof initialState

const sidebarReducer = (state = initialState, action: any): InitialStateType => {
    return state;
}

export default sidebarReducer;