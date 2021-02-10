import ActionType from './actionType/AuthType'

export const Login = (user_fb_id, userName) => {
    return {
        type: ActionType.Login,
        userId: user_fb_id,
        username: userName
    };
}

export const Logout = () => {
    return {
        type: ActionType.Logout,
        userId: null
    };
}

export const SetAccessToken = (accessToken) => {
    return {
        type: ActionType.SetAccessToken,
        accessToken: accessToken
    };
}