import React from 'react';
import styled from 'styled-components';
import { Container } from '../../common/Container';

const StyledCookieContainer = styled(Container)`
    @media screen and (max-width: 800px) {
        /* border: 2px solid red; */
        display: block;
        margin: 0;
        height: 440px;
    }
`;

const ParaContainer = styled.div`
    /* border: 2px solid green; */
    /* width: 944px; */
    height: 100%;
    margin-right: 116px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 800px) {
        /* border: 2px solid steelblue; */
        flex: 1;
        height: 200px;
        margin: 0 42px;
        margin-top: 50px;
        align-items: flex-start;
    }
`;

const ParaText = styled.p`
    /* border: 2px solid green; */
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #F5F2E8;
    @media screen and (max-width: 800px) {
        /* border: 2px solid red; */
        text-align: center;
        line-height: 30px;
        margin: 0;
    }
`;

const UnderlineText = styled.span`
    text-decoration: underline;
`;

const BtnContainer = styled.div`
    /* border: 2px solid pink; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 800px) {
        /* border: 2px solid pink; */
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: 40px;
        margin-top: 20px;
    }
`;

const StyledBtn = styled.button`
    outline: none;
    margin: 0;
    padding: 0;
    width: 180px;
    height: 50px;
    border: 2px solid #F5F2E8;
    background-color: #AC9B88;
    cursor: pointer;
    @media screen and (max-width: 800px) {
        /* border: 2px solid red; */
        /* display: none; */
        text-align: center;
        line-height: 30px;
        margin: 0;
        height: 40px;
    }
`;

const BtnText = styled.span`
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #F5F2E8;
    @media screen and (max-width: 800px) {
        font-family: Roboto;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: 0em;
    }
`;

const CookieLayout = () => {
    return (
        <StyledCookieContainer>
            <ParaContainer>
                <ParaText>
                    We value and respect your privacy. Chun Yu Ribbon uses its own and selected third-party cookies on this site to improve performance, for analytics and for advertising. By browsing this site, you are agreeing to this. We encourage you to review our full "Privacy and Cookies Policy" for more information.
                    <br />
                    <UnderlineText>Cookies Policy</UnderlineText>
                </ParaText>
            </ParaContainer>
            <BtnContainer>
                <StyledBtn>
                    <BtnText>Accept</BtnText>
                </StyledBtn>
            </BtnContainer>
        </StyledCookieContainer>
    )
};

export default CookieLayout;