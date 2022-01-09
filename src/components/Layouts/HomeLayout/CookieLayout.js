import React from 'react';
import styled from 'styled-components';
import { Container } from '../../common/Container';

const ParaContainer = styled.div`
    /* border: 2px solid green; */
    width: 944px;
    height: 100%;
    margin-right: 116px;
    display: flex;
    align-items: center;
`;

const ParaText = styled.p`
    /* border: 2px solid green; */
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #F5F2E8;
`;

const BtnContainer = styled.div`
    /* border: 2px solid pink; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledBtn = styled.button`
    outline: none;
    margin: 0;
    padding: 0;
    width: 180px;
    height: 50px;
    border: 2px solid #F5F2E8;
    background-color: #AC9B88;
`;

const BtnText = styled.span`
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #F5F2E8;
`;

const CookieLayout = () => {
    return (
        <Container>
            <ParaContainer>
                <ParaText>
                    We value and respect your privacy. Chun Yu Ribbon uses its own and selected third-party cookies on this site to improve performance, for analytics and for advertising. By browsing this site, you are agreeing to this. We encourage you to review our full "Privacy and Cookies Policy" for more information.
                    <br />
                    <span style={{ textDecoration: 'underline' }}>Cookies Policy</span>
                </ParaText>
            </ParaContainer>
            <BtnContainer>
                <StyledBtn>
                    <BtnText>Accept</BtnText>
                </StyledBtn>
            </BtnContainer>
        </Container>
    )
};

export default CookieLayout;