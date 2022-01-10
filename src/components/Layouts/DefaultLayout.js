import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../common/Colors';
import Footer from './Footer';
import Header from './Header';
import CookieLayout from './HomeLayout/CookieLayout';

const LayoutContainer = styled.div`
    background-color: ${Colors.bgc};
    width: 100vw;
`;

const BodyContainer = styled.div`
    width: 100vw;
    height: 100%;
`;

const CookieContainer = styled.div`
    /* border: 2px solid green; */
    display: ${props => props.display};
    width: 100vw;
    height: 220px;
    background-color: #000000;
    opacity: 80%;
    position: fixed;
    bottom: 0;
    z-index: 50;
`;

const DefaultLayout = ({ children }) => {
    const [cookieDisplay, setCookieDisplay] = useState(true);

    return (
        <LayoutContainer>
            <Header />
            <CookieContainer
                display={cookieDisplay ? 'block' : 'none'}
                onClick={() => setCookieDisplay(false)}
            >
                <CookieLayout />
            </CookieContainer>
            <BodyContainer>
                { children }
            </BodyContainer>
            <Footer />
        </LayoutContainer>
    )
};

export default DefaultLayout;