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

const FooterContainer = styled.div`
    /* border: 1px solid green; */
    width: 100vw;
    height: 400px;
    background-color: #DFDFDF;
    display: flex;
    position: absolute;
    bottom: 0;
    margin: 0;
`;

const FooterColContainer = styled(Container)`
    /* border: 2px solid yellow; */
    /* display: flex; */
    width: 90%;
    height: 315px;
    /* margin: 0 85px; */
    margin-top: 85px;
`;

const SideCol = styled.div`
    /* border: 2px solid red; */
    flex: 1;
    height: 100%;
    /* margin-right: 47px; */
`;

const LogoItem = styled.img`
    width: 240px;
    height: 36px;
    display: flex;

`;

const CopyRightContainer = styled.div`
    width: 235px;
    margin-top: 11px;
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
`;

const LeftIcon = styled.img`
    width: 36px;
    height: 36px;
    margin-right: 20px;
`;

const MainCol = styled.div`
    /* border: 2px solid purple; */
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: space-around;
`;

const LeftMainContainer = styled.div`
    /* border: 2px solid green; */
    /* margin: 0 47px; */
    /* flex: 1; */
    height: 100%;
`;

const MainTitle = styled.h3`
    font-family: Roboto;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    margin: 0;
    text-align: start;
`;

const SubContainer = styled.div`
    /* border: 2px solid red; */
    margin-top: 20px;
`;

const SubTitle = styled.a`
    display: block;
    width: 100%;
    color: #4F4F4F;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 18px;
    /* line-height: 0; */
    text-align: start;
    cursor: pointer;
    margin-top: 0;
    margin-bottom: 12px;
    text-decoration: none;
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
    /* align-items: center; */
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
                    </LeftIconsContainer>
                </SideCol>
                <MainCol>
                    <LeftMainContainer>
                        <MainTitle>
                            Information
                        </MainTitle>
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
                <SideCol style={{ marginRight: 0, marginLeft: 47 }}>
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
                </SideCol>
            </FooterColContainer>
            <SideItem>
                <ItemWord>Ad. by BOFT</ItemWord>
            </SideItem>
        </FooterContainer>
    )
};

export default Footer;