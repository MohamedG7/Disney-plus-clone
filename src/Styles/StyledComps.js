import styled from 'styled-components';
//*--------------------------------------
const Container = styled.section`
   overflow: hidden;
   display: flex;
   flex-direction: column;
   text-align: center;
   height: 100vh;
`;
const Content = styled.div`
   margin-bottom: 10vw;
   width: 100%;
   position: relative;
   min-height: 100vh;
   box-sizing: border-box;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding: 80px 40px;
   height: 100%;
`;
const BgImage = styled.div`
   background-position: top;
   background-size: cover;
   background-repeat: no-repeat;
   background-image: url("/images/login-background.jpg");
   position: absolute;
   height: 100%;
   right: 0;
   top: 0;
   left: 0;
   z-index:-1;
`;
const CTA = styled.div`
   margin-bottom: 2vw;
   max-width: 650px;
   flex-wrap: wrap;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-top: 0;
   align-items: center;
   text-align: center;
   margin-right: auto;
   margin-left: auto;
   transition-timing-function: ease-out;
   transition: opacity 0.2s;
   width: 100%;
`;
const CTALogo1 = styled.img`
   margin-bottom: 12px;
   min-width: 600px;
   min-height: 1px;
   display: block;
   width: 100%;
`;
const SignUP = styled.a`
   font-weight: bold;
   color: #f9f9f9;
   background-color: #0063e5;
   margin-bottom: 12px;
   width: 100%;
   letter-spacing: 1.5px;
   font-size: 18px;
   padding: 16.5px 0;
   border: 1px solid transparent;
   border-radius: 4px;
   cursor: pointer;
   &:hover {
       background-color: #0483ee;
   }
`;
const Description = styled.p`
   color: hsla(0, 0%, 95.3%, 1);
   font-size: 11px;
   margin: 0 0 24px;
   line-height: 1.5;
   letter-spacing: 1.5px;
`;
const CTALogo2 = styled.img`
   max-width: 600px;
   margin-bottom: 20px;
   display: inline-block;
   vertical-align: bottom;
   width: 100%;
`;
const Nav = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   height: 70px;
   background-color: #090b13;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 30px;
   letter-spacing: 16px;
   z-index: 3;
`;
const Logo = styled.a`
   padding: 0;
   width: 80px;
   margin-top: 4px;
   max-height: 70px;
   font-size: 0;
   display: inline-block;
   img {
       display: block;
       width: 100%;
   }
`;
const NavMenu = styled.div`
   align-items: center;
   display: flex;
   flex-flow: row nowrap;
   height: 100%;
   justify-content: flex-end;
   margin: 0px;
   padding: 0px;
   position: relative;
   margin-right: auto;
   margin-left: 25px;

   .a-link {
      display: flex;
      align-items: center;
      padding: 0 12px;

      
      span {
         color: rgb(249, 249, 249);
         font-size: 13px;
         letter-spacing: 1.42px;
         line-height: 1.08;
         padding: 2px 0px;
         white-space: nowrap;
         position: relative;
         
         &:before{
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
         }

      }

      &:hover{
         span:before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
         }
      }
   }

   .MuiSvgIcon-root {
      margin: 5px;
      height: 20px;
      width: 20px;
   }


   @media (max-width: 768px) {
      display: none;
   }
`;
const Login = styled.a`
   background-color: rgba(0, 0, 0, 0.6);
   padding: 8px 16px;
   text-transform: uppercase;
   letter-spacing: 1.5px;
   border: 1px solid #f9f9f9;
   border-radius: 4px;
   transition: all 0.2s ease 0s;
   cursor: pointer;
   &:hover {
     background-color: #f9f9f9;
     color: #000;
     border-color: transparent;
  }
`;
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
const Container2 = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
const Container3 = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrapper = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;
const Container4 = styled.div`
   padding: 0 0 26px;
`;
const Content2 = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrapper2 = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export{
    Container,
    Content,
    BgImage,
    CTA,
    CTALogo1,
    SignUP,
    Description,
    CTALogo2,
    Nav,
    Logo,
    NavMenu,
    Login,
    DropDown,
    SignOut,
    Container2,
    Container3,
    Wrapper,
    Container4,
    Content2,
    Wrapper2
}