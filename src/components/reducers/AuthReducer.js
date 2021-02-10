import ActionType from '../actions/actionType/AuthType'

const initialState = {
    user_fb_id: '',
    username: '',
    accessToken: ''
}


const AuthLoginReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case ActionType.Login:
            return {
                ...state,
                username: actions.username,
                user_fb_id: actions.userId
            };

        case ActionType.Logout:
            return initialState;
        case ActionType.SetAccessToken: {
            return {
                ...state,
                accessToken: actions.accessToken
            }
        }

        default:
            return state;
    }
}

export default AuthLoginReducer;