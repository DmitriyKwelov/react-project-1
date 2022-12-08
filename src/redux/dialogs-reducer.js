const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, massage: 'Hi'},
        {id: 2, massage: 'How are u'},
        {id: 3, massage: 'Yo'},
        {id: 4, massage: 'Yo'},
        {id: 5, massage: 'You'},
        {id: 6, massage: 'yp'},
    ]
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, massage: body}]
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreate = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;