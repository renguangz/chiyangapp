import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../common/Colors';
import Footer from './Footer';
import Header from './Header/Header';
import HeaderMenu from './Header/HeaderMenu';
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
    @media screen and (max-width: 800px) {
        height: 360px;
        /* height: 640px; */
    }
`;

const HeaderMenuBgc = styled.div`
    background: ${Colors.latteBgc};
    display: ${props => props.display};
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;
    opacity: 95%;
`;

const DefaultLayout = ({ children }) => {
    const [headerMenuDisplay, setHeaderMenuDisplay] = useState(false);
    const [cookieDisplay, setCookieDisplay] = useState(true);

    useEffect(() => {
        if (headerMenuDisplay) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
                document.body.style.overflow = 'scroll'
        }
    }, [headerMenuDisplay])

    return (
        <LayoutContainer>
            {/* propblems on useEffect which disable scrolling */}
            <HeaderMenuBgc display={headerMenuDisplay ? 'block' : 'none'}>
                <HeaderMenu closeMenu={() => setHeaderMenuDisplay(false)} />
            </HeaderMenuBgc>
            <Header headerMenuClick={() => setHeaderMenuDisplay(true)} />
            <CookieContainer
                display={cookieDisplay ? 'block' : 'none'}
                onClick={() => setCookieDisplay(false)}
            >
                <CookieLayout />
            </CookieContainer>
            <BodyContainer>
                {children}
            </BodyContainer>
            <Footer />
        </LayoutContainer>
    )
};

export default DefaultLayout;