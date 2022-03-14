import React from 'react'
import { Typography } from '@material-ui/core'
import { Container4, Content2, Wrapper2 } from '../Styles/StyledComps';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTrendings } from '../Redux/movie/movieSlice'

const Trendings = () => {
    const movies = useSelector(selectTrendings);
    return (
        <Container4>
            <Typography><h4>Trendings</h4></Typography>
            <Content2>
            {movies && movies.map((movie, key) => (
                <Wrapper2 key = {key}>
                   {movie.id}
                   <Link to = {`/detail/` + movie.id}>
                       <img src = {movie.cardImg} alt = {movie.title} />
                   </Link>
                </Wrapper2>
            ))}
            </Content2>
        </Container4>
    )
}

export default Trendings
