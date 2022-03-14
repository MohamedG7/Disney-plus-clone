import React, { useEffect } from 'react'
import { Container2 } from '../Styles/StyledComps'
import ImgSlider from './ImgSlider'
import NewDiney from './NewDisney'
import Originals from './Originals'
import Recommands from './Recommands'
import Trendings from './Trending'
import Viewers from './Viewers'
import { db } from '../App/firebaseSetup';
import { collection, getDocs } from '@firebase/firestore'
import { setMovie } from '../Redux/movie/movieSlice'
import { selectUserName } from '../Redux/reducer'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    const getMovies = async () => {
      const moviesCol = collection(db, 'movies');
      const moviesSnapshot = await getDocs(moviesCol);
      const moviesList = moviesSnapshot.docs.map((doc) => {
        switch(doc.data().type) {
          case "recommend":
                recommends = [...recommends, { id: doc.id, ...doc.data() }];
                break;
    
              case "new":
                newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                break;
    
              case "original":
                originals = [...originals, { id: doc.id, ...doc.data() }];
                break;
    
              case "trending":
                trending = [...trending, { id: doc.id, ...doc.data() }];
                break;
        }
      });
      dispatch(
        setMovie({
          recommanded: recommends,
          originals: originals,
          trendings: trending,
          newDisney: newDisneys,
        })
      );
      return moviesList
    };

    useEffect(() => {
      getMovies();
    }, [userName]);    


    return (
        <Container2>
            <ImgSlider />
            <Viewers />
            <Recommands />
            <NewDiney />
            <Originals />
            <Trendings />
        </Container2>
    )
}

export default Home
