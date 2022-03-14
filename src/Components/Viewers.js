import React from 'react'
import { Container3, Wrapper } from '../Styles/StyledComps';

const Viewers = () => {
    return (
        <div>
            <Container3>
               <Wrapper>
                  <img src = "/images/viewers-disney.png" alt = "" />
                  <video autoPlay={true} loop={true} playsInline={true}>
                      <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
                  </video>
               </Wrapper>
               <Wrapper>
                  <img src = "/images/viewers-marvel.png" alt = "" />
                  <video autoPlay={true} loop={true} playsInline={true}>
                       <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
                  </video>
               </Wrapper>
               <Wrapper>
                  <img src = "/images/viewers-national.png" alt = "" />
                  <video autoPlay={true} loop={true} playsInline={true}>
                       <source
                         src="/videos/1564676296-national-geographic.mp4"
                         type="video/mp4"
                       />
                   </video>
               </Wrapper>
               <Wrapper>
                  <img src = "/images/viewers-pixar.png" alt = "" />
                  <video autoPlay={true} loop={true} playsInline={true}>
                      <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
                  </video>
               </Wrapper>
               <Wrapper>
                  <img src = "/images/viewers-starwars.png" alt = "" />
                  <video autoPlay={true} loop={true} playsInline={true}>
                      <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
                  </video>
               </Wrapper>
            </Container3>
        </div>
    )
}

export default Viewers
