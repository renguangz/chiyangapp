import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchOutlined } from "@ant-design/icons/lib/icons";
import { Container } from '../../common/Container';
import Logo from '../../images/logo.png';
import Menu from '../../images/menu.png';
import AboutHover from '../../common/headerHovers/AboutHover';
import SearchHover from '../../common/headerHovers/SearchHover';

const HeaderContainer = styled.div`
    /* border: 1px solid pink; */
    width: 100vw;
    height: 100px;
    background: rgba(245, 242, 232, 0.3);
    backdrop-filter: blur(30px);
    position: fixed;
    z-index: 100;
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

const StyledTitle = styled.a`
    /* border: 2px solid green; */
    font-family: Times;
    font-weight: 400;
    font-size: 20px;
    color: black;
    cursor: pointer;
    &:hover {
        color: black;
    }
    &:after {
        content: '';
        display:block;
        border-bottom: solid 2px #000000; 
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
    }
    &:hover:after {
        transform: scaleX(1);
    }
`;

const LastStyledTitle = styled(StyledTitle)`
    cursor: auto;
    height: 100%;
    &:after {
        content: '';
        display: none;
    }
`;

const ItemContainer = styled.div`
    /* border: 2px solid red; */
    display: flex;
    height: 100%;
`;

const LastItem = styled.div`
    /* border: 2px solid gold; */
    display: flex;
    align-items: center;
    justify-content: right;
    height: 100%;
    width: 40px;
    margin-left: 40px;
    cursor: pointer;
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
    cursor: pointer;
    @media screen and (max-width: 800px) {
        border: 2px solid red;
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

const leftHeaderTitles = ['NEWS', 'PRODUCT']
const rightHeaderTitles = ['CONTACT', 'DOWNLOAD']
const Header = ({ headerMenuClick }) => {
    const [mouseOverAbout, setMouseOverAbout] = useState(false);
    const [mouseOverSearch, setMouseOverSearch] = useState(false);

    return (
        <HeaderContainer>
            <Container>
                <TitleItemContainer>
                    <TitleContainer
                        onMouseOver={() => setMouseOverAbout(true)}
                        onMouseLeave={() => setMouseOverAbout(false)}
                    >
                        <StyledTitle>ABOUT</StyledTitle>
                    </TitleContainer>
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
                <MenuContainer onClick={headerMenuClick}>
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
                    <TitleContainer style={{ justifyContent: 'end' }}>
                        <LastStyledTitle>
                            <ItemContainer>
                                <LastItem style={{ fontSize: '20px' }}>
                                    <span>繁</span>
                                </LastItem>
                                <LastItem
                                    onMouseOver={() => setMouseOverSearch(true)}
                                    onMouseLeave={() => setMouseOverSearch(false)}
                                >
                                    <SearchOutlined style={{ fontSize: '23px' }} />
                                </LastItem>
                            </ItemContainer>
                        </LastStyledTitle>
                    </TitleContainer>
                </TitleItemContainer>
            </Container>
            <AboutHover
                mouseOver={mouseOverAbout}
            />
            <SearchHover mouseOver={mouseOverSearch} />
        </HeaderContainer>
    )
};

export default Header;