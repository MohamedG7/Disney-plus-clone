import React from 'react';
import { Container, Content, BgImage, CTA, CTALogo1, SignUP, Description, CTALogo2 } from '../Styles/StyledComps'

const LoginUser = () => {
    return (
        <Container>
           <Content>
              <CTA>
                <CTALogo1 src = "/images/cta-logo-one.svg" />
                <SignUP>GET AT THERE</SignUP>
                <Description>Get Primier Access To Raya And The Last Dragon for an addition free with Disney+ subscription. As of 03/20/21, The price of Disney+ And The Disney Bundle will increase by 1$</Description>
                <CTALogo2 src = "/images/cta-logo-two.png" />
              </CTA>
              <BgImage />
           </Content>
        </Container>
    )
}

export default LoginUser
