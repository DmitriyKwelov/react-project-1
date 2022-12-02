const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return  {
                ...state,
                newMessageBody: action.body
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, massage: body}]
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreate = () => ({type: SEND_MESSAGE,})
export const updateNewMessageBodyCreate = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    }
}

export default dialogsReducer;