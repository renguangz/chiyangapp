import React from 'react';
import styled from 'styled-components';
import { Colors } from '../common/Colors';
import Footer from './Footer';
import Header from './Header';

const LayoutContainer = styled.div`
    height: 100vh; // delete
    background-color: ${Colors.bgc};
    width: 100vw;
`;

const DefaultLayout = ({ children }) => {
    return (
        <LayoutContainer>
            <Header />
            {children}
            <Footer />
        </LayoutContainer>
    )
};

export default DefaultLayout;