import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Login, SetAccessToken, Logout } from './actions/AuthAction'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {

    //var checkLogin = CheckLogin();

    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(state => state.AuthLoginReducer.username);

    const handleAfterLogin = (userID, username, accessToken) => {
        dispatch(Login(userID, username));
        dispatch(SetAccessToken(accessToken));
        //setLoginYet(true);
    }


    const CheckLoginFB = () => {
        if (username === '') {
            window.FB.getLoginStatus(function (response) {

                console.log('db_checkLoginFB', response);

                if (response.status === 'connected') {
                    const userID = response.authResponse.userID;
                    const accessToken = response.authResponse.accessToken;

                    window.FB.api('/me', function (response) {

                        console.log('lg_cn_api', response);

                        handleAfterLogin(userID, response.name, accessToken);

                    });
                }
            });

        }

    }



    const handleLogout = () => {

        //const check = CheckLoginFB();
        window.FB.logout(function (response) {

            console.log('logout facebook', response);

            window.FB.getLoginStatus(function (response) {

                console.log('check logout', response);

                if (response.status === 'connected') {
                    console.log('logout fail');
                } else {
                    console.log('logout success');
                    dispatch(Logout());
                    history.push('/login');
                }
            });
        });
    }

    CheckLoginFB();

    return (
        <>
            <div className='wrapper'>
                <div className='form'>
                    <h1 className='title'>Hello, {username}</h1>
                    <div align="center">
                        <Row>
                            {/* <Col md={6}><button type='submit' className='button login_btn'><span>Start Chatting</span></button></Col> */}
                            {/* <Col md={6}>
                                <div className="fb-login-button fb_login_btn" data-onlogin='handleLoginFB()' data-width="" data-size="large" data-button-type="login_with" data-layout="rounded" data-auto-logout-link="true" data-use-continue-as="false"></div>
                            </Col> */}
                            <button type='button' onClick={handleLogout} className='button fb_logout_btn_common'><span>logout</span></button>
                        </Row>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Dashboard;