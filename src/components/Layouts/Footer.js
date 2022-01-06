import React from 'react';
import styled from 'styled-components';
import { Container } from '../common/Container';
import Logo from '../images/logo.png';
import FBIcon from '../images/FBIcon.png';
import IGIcon from '../images/IGIcon.png';
import PhoneIcon from '../images/PhoneIcon.png';
import PrinterIcon from '../images/PrinterIcon.png';
import MailIcon from '../images/MailIcon.png';
import LocationIcon from '../images/LocationIcon.png';
import LineIcon from '../images/LineIcon.png';
import YoutubeIcon from '../images/YoutubeIcon.png';

const FooterContainer = styled.div`
    /* border: 1px solid green; */
    width: 100vw;
    height: 400px;
    background-color: #DFDFDF;
    display: flex;
    position: absolute;
    bottom: 0;
    margin: 0;
    @media screen and (max-width: 800px) {
        /* border: 2px solid orange; */
        height: 470px;
    }
`;

const FooterColContainer = styled(Container)`
    /* border: 2px solid yellow; */
    width: 90%;
    height: 315px;
    margin-top: 85px;
    align-items: flex-start;
    @media screen and (max-width: 800px) {
        margin: 0 36px;
        height: 330px;
        margin-top: 50px;
        margin-bottom: 90px;
        display: block;
    }
`;

const SideCol = styled.div`
    /* border: 2px solid red; */
    flex: 1;
    @media screen and (max-width: 800px) {
        /* border: 2px solid orange; */
        max-width: 310px;
        margin: 0 auto;
        margin-bottom: 58px;
    }
`;

const RightSideCol = styled(SideCol)`
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

const LogoItem = styled.img`
    width: 240px;
    height: 36px;
    display: flex;
    @media screen and (max-width: 800px) {
        width: 160px;
        height: 24px;
    }
`;

const CopyRightContainer = styled.div`
    width: 235px;
    margin-top: 11px;
    @media screen and (max-width: 800px) {
        /* border: 2px solid black; */
        width: 100%;
        margin-top: 6px;
    }
`;

const CopyRight = styled.p`
    font-family: Roboto;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    text-align: start;
    margin: 0;
`

const LeftIconsContainer = styled.div`
    /* border: 2px solid pink; */
    display: flex;
    margin-top: 17px;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        margin-top: 9px;
    }
`;

const LeftIcon = styled.img`
    width: 36px;
    height: 36px;
    margin-right: 20px;
`;

const RwdIcon = styled(LeftIcon)`
    display: none;
    @media screen and (max-width: 800px) {
        display: inline-block;
    }
`;

const MainCol = styled.div`
    /* border: 2px solid purple; */
    display: flex;
    flex: 2;
    justify-content: space-around;
    @media screen and (max-width: 800px) {
        /* border: 2px solid purple; */
        max-width: 340px;
        margin: 0 auto;
        justify-content: space-between;
    }
`;

const LeftMainContainer = styled.div`
    /* border: 2px solid green; */
    height: 100%;
`;

const MainTitle = styled.h3`
    font-family: Roboto;
    font-weight: 700;
    font-size: 22px;
    line-height: 16px;
    margin: 0;
    text-align: start;
    @media screen and (max-width: 800px) {
        font-size: 16px;
    }
`;

const MainTitleBorder = styled.div`
    display: none;
    @media screen and (max-width: 800px) {
        display: block;
        border-bottom: 2px solid black;
        margin-top: 7px;
        width: 88px;
    }
`;

const SubContainer = styled.div`
    /* border: 2px solid red; */
    margin-top: 20px;
    @media screen and (max-width: 800px) {
        /* border: 2px solid red; */
        margin-top: 12px;
    }
`;

const SubTitle = styled.a`
    display: block;
    width: 100%;
    color: #4F4F4F;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 18px;
    text-align: start;
    cursor: pointer;
    margin-top: 0;
    margin-bottom: 12px;
    text-decoration: none;
    @media screen and (max-width: 800px) {
        line-height:16px;
        font-size: 14px;
        margin-bottom: 10px;
    }
`;
const SubTitleMargin = styled(SubTitle)`
    margin-right: 70px;
`;

const RightMainContainer = styled.div`
    /* border: 2px solid steelblue; */
    height: 100%;
`;

const RightMainSubContainer = styled.div`
    /* border: 2px solid yellow; */
    display: flex;
`;

const IconSubContainer = styled.div`
    /* border: 2px solid blue; */
    display: flex;
`;

const RightIcon = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 12px;
    margin-top: 6px;
`;

const SideItem = styled.div`
    /* border: 2px solid gold; */
    position: absolute;
    bottom: 0;
    right: 0;
    transform:  translate(55px, 5px) rotate(-90deg);
    transform-origin: top left;
    line-height: 18px;
`;

const ItemWord = styled.p`
    font-weight: 400;
    font-size: 15px;
    color: #FFFFFF;
    font-family: Roboto, sans-serif;
    margin: 0;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterColContainer>
                <SideCol>
                    <LogoItem src={Logo} alt='logo' />
                    <CopyRightContainer>
                        <CopyRight>
                            Copyright © 2021 CHUN YU RIBBON ENT CO., LTD.
                        </CopyRight>
                        <CopyRight>
                            All rights reserved.
                        </CopyRight>
                    </CopyRightContainer>
                    <LeftIconsContainer>
                        <LeftIcon src={FBIcon} alt='fb' />
                        <LeftIcon src={IGIcon} alt='ig' />
                        <RwdIcon src={LineIcon} alt='line' />
                        <RwdIcon src={YoutubeIcon} alt='youtube' />
                    </LeftIconsContainer>
                </SideCol>
                <MainCol>
                    <LeftMainContainer>
                        <MainTitle>
                            Information
                        </MainTitle>
                        <MainTitleBorder />
                        <SubContainer>
                            <SubTitle href='#!'>About Us</SubTitle>
                            <SubTitle href='#!'>News</SubTitle>
                            <SubTitle href='#!'>Download</SubTitle>
                            <SubTitle href='#!'>Join Us</SubTitle>
                        </SubContainer>
                    </LeftMainContainer>
                    <RightMainContainer>
                        <MainTitle>
                            Our Product
                        </MainTitle>
                        <MainTitleBorder style={{ width: 217 }} />
                        <RightMainSubContainer>
                            <SubContainer>
                                <SubTitleMargin href='#!'>Webbing</SubTitleMargin>
                                <SubTitleMargin href='#!'>Knit</SubTitleMargin>
                                <SubTitleMargin href='#!'>Jacquard</SubTitleMargin>
                                <SubTitleMargin href='#!'>Reflect</SubTitleMargin>
                                <SubTitleMargin href='#!'>Elastic</SubTitleMargin>
                                <SubTitleMargin href='#!'>Cord</SubTitleMargin>
                            </SubContainer>
                            <SubContainer>
                                <SubTitle href='#!'>Piping</SubTitle>
                                <SubTitle href='#!'>Braid</SubTitle>
                                <SubTitle href='#!'>Woven Lable</SubTitle>
                                <SubTitle href='#!'>Organic</SubTitle>
                                <SubTitle href='#!'>Sustainable</SubTitle>
                                <SubTitle href='#!'>New Item</SubTitle>
                            </SubContainer>
                        </RightMainSubContainer>
                    </RightMainContainer>
                </MainCol>
                <RightSideCol style={{ marginRight: 0, marginLeft: 47 }}>
                    <MainTitle>Contact Us</MainTitle>
                    <SubContainer>
                        <IconSubContainer>
                            <RightIcon src={PhoneIcon} alt='phone' />
                            <SubTitle>886-2-26194660</SubTitle>
                        </IconSubContainer>
                        <IconSubContainer>
                            <RightIcon src={PrinterIcon} alt='printer' />
                            <SubTitle>886-2-26194670</SubTitle>
                        </IconSubContainer>
                        <IconSubContainer>
                            <RightIcon src={MailIcon} alt='mail' />
                            <SubTitle>chunyuco@ms36.hinet.net</SubTitle>
                        </IconSubContainer>
                        <IconSubContainer>
                            <RightIcon src={LocationIcon} alt='mail' />
                            <SubTitle>No. 219, Guanhai Blvd., Bali Dist.,
                                New Taipei City 249005 ,
                                Taiwan (R.O.C.)
                            </SubTitle>
                        </IconSubContainer>
                    </SubContainer>
                </RightSideCol>
            </FooterColContainer>
            <SideItem>
                <ItemWord>Ad. by BOFT</ItemWord>
            </SideItem>
        </FooterContainer>
    )
};

export default Footer;