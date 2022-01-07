import React from 'react';
import styled from 'styled-components';
import { Colors } from '../common/Colors';
import Footer from './Footer';
import Header from './Header';

const LayoutContainer = styled.div`
    /* height: 100vh; // delete */
    /* height: 100%; */
    background-color: ${Colors.bgc};
    width: 100vw;
`;

const BodyContainer = styled.div`
    /* border: 2px solid pink; */

`;

const DefaultLayout = ({ children }) => {
    return (
        <LayoutContainer>
            <Header />
            <BodyContainer>
                {children}
            </BodyContainer>
            <Footer />
        </LayoutContainer>
    )
};

export default DefaultLayout;