import React from 'react';
import DefaultLayout from '../Layouts/DefaultLayout';
import CarouselLayout from '../Layouts/CarouselLayout';
import styled from 'styled-components';

const FirstSectionContainer = styled.div`
    /* background: green; */
    width: 100vw;
    /* height: 800px; */
`;

const HomePage = () => {
    return (
        <DefaultLayout>
            <FirstSectionContainer>
                <CarouselLayout />
            </FirstSectionContainer>
        </DefaultLayout>
    )
};

export default HomePage;