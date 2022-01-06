import React from 'react';
import styled from 'styled-components';
import { HeaderLastItem } from '../common/HeaderLastItem';
import { Container } from '../common/StyledComponents';
import Logo from '../images/logo.png';

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
`;

const TitleContainer = styled.div`
    /* border: 2px solid red; */
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: left;
    align-items: center;
`;

const StyledTitle = styled.p`
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
`;

const LogoItem = styled.img`
    height: 28.03px;
    width: 190px;
`;

const leftHeaderTitles = ['ABOUT', 'NEWS', 'PRODUCT']
const rightHeaderTitles = ['CONTACT', 'DOWNLOAD', <HeaderLastItem />]
const Header = () => {
    return (
        <HeaderContainer>
            <Container>
                <TitleItemContainer>
                    {
                        leftHeaderTitles.map(item => (
                            <TitleContainer>
                                <StyledTitle>{item}</StyledTitle>
                            </TitleContainer>
                        ))
                    }
                </TitleItemContainer>
                <LogoContainer>
                    <LogoItem src={Logo} alt='logo' />
                </LogoContainer>
                <TitleItemContainer>
                    {
                        rightHeaderTitles.map(item => (
                            <TitleContainer style={{ justifyContent: 'end' }}>
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