import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you!!!?', likesCount: 12},
                {id: 2, message: 'It\'s my first post!', likesCount: 9},
                {id: 3, message: 'Hi, how are you?', likesCount: 133},
                {id: 4, message: 'Hren Vam!!', likesCount: 6},
            ],
            newPostText: 'it-k',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Fedia'},
                {id: 7, name: 'Dormidont'},
            ],
            messages: [
                {id: 1, message: 'Hi Hi Hi Hi!!'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yoooo!'},
                {id: 4, message: 'Yoooo!'},
                {id: 5, message: 'Yoooo....'},
                {id: 6, message: 'Yoooo?'},
                {id: 7, message: 'Hello, Dormidont!'},
            ],
            newMessageBody: "",
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State is changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;
