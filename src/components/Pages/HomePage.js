import React from 'react';
import DefaultLayout from '../Layouts/DefaultLayout';
import CarouselLayout from '../Layouts/CarouselLayout';
import styled from 'styled-components';
import CookieLayout from '../Layouts/CookieLayout';
import SecondSectionLayout from '../Layouts/SecondSectionLayout';

const FirstSectionContainer = styled.div`
    /* background: green; */
    width: 100vw;
`;

const SecondSectionContainer = styled.div`
    /* border: 2px solid steelblue; */
    height: 630px;
    width: 100vw;
`;

const CookieContainer = styled.div`
    /* border: 2px solid green; */
    height: 220px;
    background-color: #000000;
    opacity: 80%;
`;

const HomePage = () => {
    return (
        <DefaultLayout>
            <FirstSectionContainer>
                <CarouselLayout />
            </FirstSectionContainer>
            <SecondSectionContainer>
                <SecondSectionLayout />
            </SecondSectionContainer>
            <CookieContainer>
                <CookieLayout />
            </CookieContainer>
        </DefaultLayout>
    )
};

export default HomePage;