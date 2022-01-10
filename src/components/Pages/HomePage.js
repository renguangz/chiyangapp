import React from 'react';
import DefaultLayout from '../Layouts/DefaultLayout';
import CarouselLayout from '../Layouts/HomeLayout/CarouselLayout';
import styled from 'styled-components';
import SecondSectionLayout from '../Layouts/HomeLayout/SecondSectionLayout';
import ThirdSectionLayout from '../Layouts/HomeLayout/thirdSection/ThirdSectionLayout';
import FourthSectionLayout from '../Layouts/HomeLayout/fourthSection/FourthSectionLayout';
import FifthSectionLayout from '../Layouts/HomeLayout/fifthSection/FifthSectionLayout';
import SixSectionLayout from '../Layouts/HomeLayout/SixthSectionLayout';

const SectionContainer = styled.div`
    /* border: 2px solid green; */
    width: 100vw;
    height: ${props => props.height}px;
    margin-top: ${props => props.marginTop || 0}px;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
       height: ${props => props.rwdHeight}px;
    }
`;

const HomePage = () => {
    return (
        <DefaultLayout>
            {/* <SectionContainer height={800}>
                <CarouselLayout />
            </SectionContainer> */}
            <SectionContainer height={630}>
                <SecondSectionLayout />
            </SectionContainer>
            <SectionContainer height={1044} rwdHeight={1952}>
                <ThirdSectionLayout />
            </SectionContainer>
            {/* <SectionContainer height={870} marginTop={246}>
                <FourthSectionLayout />
            </SectionContainer> */}
            {/* <SectionContainer height={1722} marginTop={304}>
                <FifthSectionLayout />
            </SectionContainer> */}
            {/* <SectionContainer height={880} marginTop={306}>
                <SixSectionLayout />
            </SectionContainer> */}
        </DefaultLayout>
    )
};

export default HomePage;