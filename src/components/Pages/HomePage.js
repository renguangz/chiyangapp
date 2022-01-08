import React from 'react';
import DefaultLayout from '../Layouts/DefaultLayout';
import CarouselLayout from '../Layouts/HomeLayout/CarouselLayout';
import styled from 'styled-components';
import CookieLayout from '../Layouts/HomeLayout/CookieLayout';
import SecondSectionLayout from '../Layouts/HomeLayout/SecondSectionLayout';
import ThirdSectionLayout from '../Layouts/HomeLayout/ThirdSectionLayout';
import FourthSectionLayout from '../Layouts/HomeLayout/fourthSection/FourthSectionLayout';

const SectionContainer = styled.div`
    /* border: 2px solid green; */
    width: 100vw;
    height: ${props => props.height}px;
    margin-top: ${props => props.marginTop || 0}px;
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
            <SectionContainer height={800}>
                <CarouselLayout />
            </SectionContainer>
            <SectionContainer height={630}>
                <SecondSectionLayout />
            </SectionContainer>
            <SectionContainer height={1044}>
                <ThirdSectionLayout />
            </SectionContainer>
            <SectionContainer height={870} marginTop={246}>
                <FourthSectionLayout />
            </SectionContainer>
            <CookieContainer>
                <CookieLayout />
            </CookieContainer>
        </DefaultLayout>
    )
};

export default HomePage;