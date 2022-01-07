import React from 'react';
import styled from 'styled-components';
import { Colors } from '../common/Colors';
import Footer from './Footer';
import Header from './Header';

const LayoutContainer = styled.div`
    background-color: ${Colors.bgc};
    width: 100vw;
`;

const BodyContainer = styled.div`
    width: 100vw;
    height: 100%;
`;

const DefaultLayout = ({ children }) => {
    return (
        <LayoutContainer>
            <Header />
            <BodyContainer>
                { children }
            </BodyContainer>
            <Footer />
        </LayoutContainer>
    )
};

export default DefaultLayout;