import React from 'react';
import styled from 'styled-components';
import { HeaderLastItem } from '../common/HeaderLastItem';
import { Container } from '../common/Container';
import Logo from '../images/logo.png';
import Menu from '../images/menu.png';

const HeaderContainer = styled.div`
    /* border: 1px solid pink; */
    width: 100vw;
    height: 100px;
    background: rgba(245, 242, 232, 0.3);
    backdrop-filter: blur(30px);
`;

const TitleItemContainer = styled.div`
    /* border: 2px solid green; */
    display: flex;
    align-items: center;
    flex: 1;
    height: 100%;
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

const TitleContainer = styled.div`
    /* border: 2px solid red; */
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: left;
    align-items: center;
`;

const StyledTitle = styled.div`
    font-family: Times;
    font-weight: 400;
    font-size: 20px;
`;

const LogoContainer = styled.div`
    /* border: 2px solid steelblue; */
    height: 100%;
    display: flex;
    align-items: center;
    margin: auto;
    @media screen and (max-width: 800px) {
        /* border: 2px solid black; */
        justify-content: space-between;
        margin: 0;
    }
`;

const MenuContainer = styled.div`
    display: none;
    @media screen and (max-width: 800px) {
        /* border: 2px solid red; */
        display: flex;
        width: 40px;
        height: 26px;
    }
`;

const LogoItem = styled.img`
    height: 28.03px;
    width: 190px;
    @media screen and (max-width: 800px) {
        width: 134px;
        height: 24px;
    }
`;

const leftHeaderTitles = ['ABOUT', 'NEWS', 'PRODUCT']
const rightHeaderTitles = ['CONTACT', 'DOWNLOAD', <HeaderLastItem />]
const Header = () => {
    return (
        <HeaderContainer>
            <Container>
                <TitleItemContainer>
                    {
                        leftHeaderTitles.map((item, index) => (
                            <TitleContainer key={index}>
                                <StyledTitle>{item}</StyledTitle>
                            </TitleContainer>
                        ))
                    }
                </TitleItemContainer>
                <LogoContainer>
                    <LogoItem src={Logo} alt='logo' />
                </LogoContainer>
                <MenuContainer>
                    <img src={Menu} alt='menu' />
                </MenuContainer>
                <TitleItemContainer>
                    {
                        rightHeaderTitles.map((item, index) => (
                            <TitleContainer key={index} style={{ justifyContent: 'end' }}>
                                <StyledTitle>{item}</StyledTitle>
                            </TitleContainer>
                        ))
                    }
                </TitleItemContainer>
            </Container>
        </HeaderContainer>
    )
};

export default Header;