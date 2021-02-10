
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Login, SetAccessToken } from './actions/AuthAction'
import { useDispatch } from 'react-redux';

const LoginForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleAfterLogin = (userID, username, accessToken) => {
        dispatch(Login(userID, username));
        dispatch(SetAccessToken(accessToken));
        //setLoginYet(true);
    }

    const CheckLoginFB = () => {
        //let check = false;
        window.FB.getLoginStatus(function (response) {

            console.log('lg_checkLoginFB', response);

            if (response.status === 'connected') {

                const userID = response.authResponse.userID;
                const accessToken = response.authResponse.accessToken;

                window.FB.api('/me', function (response) {

                    console.log('lg_cn_api', response);

                    handleAfterLogin(userID, response.name, accessToken);
                    history.push('/dashboard');

                });
            } else if (response.status === 'not_authorized') {

                window.FB.login((response) => {

                    console.log('login', response);

                    if (response.authResponse) {

                        window.FB.api('/me', function (response) {

                            console.log('lg_au_api', response);

                            history.push('/dashboard');
                        });
                    } else {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                }, { scope: 'email' });
            }
        });
        //console.log(check);
        //return check;
    }


    const handleLoginFB = (e) => {

        window.FB.login((response) => {

            console.log('handleLoginFB', response);

            if (response.authResponse) {

                const userID = response.authResponse.userID;
                const accessToken = response.authResponse.accessToken;

                window.FB.api('/me', function (response) {

                    console.log('api', response);

                    handleAfterLogin(userID, response.name, accessToken);

                    history.push('/dashboard');

                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, { scope: 'email' });
    }


    CheckLoginFB();

    return (

        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Send Message Web Tool</h1>
                <div align="center">
                    <Row>
                        {/* <Col md={6}><button type='submit' className='button login_btn'><span>Start Chatting</span></button></Col> */}
                        {/* <Col md={6}>
                                <div className="fb-login-button fb_login_btn" data-onlogin='handleLoginFB()' data-width="" data-size="large" data-button-type="login_with" data-layout="rounded" data-auto-logout-link="true" data-use-continue-as="false"></div>
                            </Col> */}
                        <Col><button type='button' onClick={handleLoginFB} className='button fb_login_btn_common'><span>Login with Facebook</span></button></Col>
                    </Row>
                </div>
            </div>
        </div >
    )
}

export default LoginForm;