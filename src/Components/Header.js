import React, { useEffect } from 'react'
import { Nav, Logo, NavMenu, Login, DropDown, SignOut } from '../Styles/StyledComps';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import StarIcon from '@material-ui/icons/Star';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Avatar } from '@material-ui/core';
import { auth, provider } from '../App/firebaseSetup';
import { signInWithPopup, signOut } from '@firebase/auth';
import { onAuthStateChanged } from '@firebase/auth';
import { 
    selectUserEmail,
    selectUserName, 
    selectUserPhoto,
    setUserLogIn,
    setUserLogOut
} from '../Redux/reducer';



const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if(user) {
          setUser(user);
          history.push("/home")
        }
      });
    }, [userName]);

    const setUser = (user) => {
        dispatch(setUserLogIn({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
    }

    const handleAuth = () => {
      if (!userName) {
         signInWithPopup(auth, provider)
         .then((result) => {
           setUser(result.user)
         })
         .catch((error) => {
           alert(error.message)
         })
      } else if (userName) {
         signOut(auth)
         .then(() => {
            dispatch(setUserLogOut());
            history.push("/");
         })
         .catch((err) => alert(err.message));
      }
    };
    return (
        <div>
            <Nav>
               <Logo>
                  <img src = "/images/logo.svg" />
               </Logo>
               { !userName ? (<Login onClick = { handleAuth }>LOGIN</Login>) : ( 
               <>
                  <NavMenu>
                     <Link to = "/home" className = "a-link">
                       <HomeIcon />
                       <span>HOME</span>
                     </Link>
                     <Link to = "/" className = "a-link">
                    <SearchIcon />
                       <span>SEARCH</span>
                     </Link>
                     <Link to = "/" className = "a-link">
                       <AddIcon />
                       <span>WATCHLIST</span>
                     </Link>
                     <Link to = "/" className = "a-link">
                       <StarIcon />
                       <span>ORIGINALS</span>
                     </Link>
                     <Link to = "/" className = "a-link">
                       <MovieIcon />
                       <span>MOVIES</span>
                     </Link>
                     <Link to = "/" className = "a-link">
                       <LocalMoviesIcon />
                    <span>SERIES</span>
                     </Link>
                  </NavMenu>
                  <SignOut>
                    <Avatar src = {userPhoto} style = {{ border: "1px solid white" }} />
                    <DropDown>
                      <span onClick = { handleAuth }>SIGN OUT</span>
                    </DropDown>
                  </SignOut>
               </>)
              }
            </Nav>
        </div>
    )
}

export default Header
