import React, { useEffect } from 'react'
import { Nav, Logo, NavMenu, UserImg, Login, LogOut, DropDown } from './styled';
import { auth, provider } from "../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { selectUserName, setSignOutState, setUserLoginDetails } from '../../features/user/userSlice';

function Header() {
    const dispatch = useDispatch();
    const history = useNavigate();
    const username = useSelector(selectUserName);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {  //if the user exist it will bring us to the home page
                setUser(user)  //set the user a user 
                history(`/`);    // and then add a home path to history
            } //it will show the home page always when the user is login
        })
    }, [username]) // this useeffect will be looking for anytime the username and this function only runs when the username is updated

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
        }));
    };

    const handleAuth = () => {
        if (!username) { //if username doesn not exist do it under (login)
            signInWithPopup(auth, provider).then((result) => {
                setUser(result.user)
            }).catch((error) => {
                alert(error.message);
            });
        } else if (username) {
            signOut(auth).then(() => {
                dispatch(setSignOutState())
                history(`/login`)
            }).catch((error) => {
                alert(error.message)
            })
        }
    };

    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            {
                !username ? <Login onClick={handleAuth}>Login</Login>
                    :
                    <>
                        <NavMenu>
                            <a>
                                <img src="/images/home-icon.svg" />
                                <span>HOME</span>
                            </a>
                            <a>
                                <img src="/images/search-icon.svg" />
                                <span>SEARCH</span>
                            </a>
                            <a>
                                <img src="/images/watchlist-icon.svg" />
                                <span>WATCHLIST</span>
                            </a>
                            <a>
                                <img src="/images/original-icon.svg" />
                                <span>ORIGINALS</span>
                            </a>
                            <a>
                                <img src="/images/movie-icon.svg" />
                                <span>MOVIES</span>
                            </a>
                            <a>
                                <img src="/images/series-icon.svg" />
                                <span>SERIES</span>
                            </a>
                        </NavMenu>
                        <LogOut>
                            <UserImg src="/images/user-image.jpg"/>
                            <DropDown>
                                <span>Log out</span>
                            </DropDown>
                        </LogOut>
                    </>
            }
        </Nav>
    )
}

export default Header;