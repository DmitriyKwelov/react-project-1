import profileReducer from "./profile-reducer";
import dialogs from "../componnents/Dialogs/Dialogs";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts:  [
                {id: 1, massage: 'Hi, how are you?', likeCount: 0},
                {id: 2, massage: 'It\'s my first post!', likeCount: 24},
            ],
            NewPostText: ''
        },
        messagesPage: {
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
        },
        sitebar: {

        }
    },
    _callSubscriber () {
        console.log('State change')
    },

    getState(){
        return this._state
    },
    subscribe (observe) {
        this._callSubscriber = observe;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sitebar = sidebarReducer(this._state.sitebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;