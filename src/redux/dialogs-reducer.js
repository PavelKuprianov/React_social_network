const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 8, message: body}],
            };
        default:
            return state;
    }

};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;
