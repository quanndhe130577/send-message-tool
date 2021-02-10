
export const CheckLogin = async () => {

    let result = {
        connected: false,
        data: null
    }

    await window.FB.getLoginStatus(function (response) {

        console.log('fb_checkLoginFB', response);

        if (response.status === 'connected') {

            const userID = response.authResponse.userID;
            const accessToken = response.authResponse.accessToken;

            window.FB.api('/me', function (response) {

                console.log('fb_api', response);

                result = {
                    connected: true,
                    data: {
                        userID: userID,
                        accessToken: accessToken,
                        username: response.name
                    }
                }

            });
        }
    });
    console.log('fb_check_rs', result)
    return result;
}

export const LoginFacebook = () => {

    let result = {
        success: false,
        data: null
    }

    window.FB.login((response) => {

        console.log('fb_login', response);

        if (response.authResponse) {

            const userID = response.authResponse.userID;
            const accessToken = response.authResponse.accessToken;

            window.FB.api('/me', function (response) {

                console.log('fb_api', response);

                result.success = true;
                result.data = {
                    userID, accessToken,
                    username: response.name
                }

            });

        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, { scope: 'email' });

    return result;
}