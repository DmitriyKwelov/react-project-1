const SEND_MESSAGE = 'SEND_MESSAGE';

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    massage: string
}
let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, massage: 'Hi'},
        {id: 2, massage: 'How are u'},
        {id: 3, massage: 'Yo'},
        {id: 4, massage: 'Yo'},
        {id: 5, massage: 'You'},
        {id: 6, massage: 'yp'},
    ] as Array<MessageType>,
}
export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any) => {
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

type  sendMessageCreateActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreate = (newMessageBody: string): sendMessageCreateActionType => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;