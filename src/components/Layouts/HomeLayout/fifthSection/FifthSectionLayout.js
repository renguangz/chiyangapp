import React from 'react';
import styled from 'styled-components';
import { Container, RwdBorderLine } from '../../../common/Container';
import Card from './Card';
import Fifth1 from '../../../images/Fifth1.png';
import Fifth2 from '../../../images/Fifth2.png';
import Fifth3 from '../../../images/Fifth3.png';
import Fifth4 from '../../../images/Fifth4.png';
import Fifth5 from '../../../images/Fifth5.png';
import Fifth6 from '../../../images/Fifth6.png';
import Fifth7 from '../../../images/Fifth7.png';
import Fifth8 from '../../../images/Fifth8.png';
import Fifth9 from '../../../images/Fifth9.png';
import Fifth10 from '../../../images/Fifth10.png';
import Fifth11 from '../../../images/Fifth11.png';

const FifthContainer = styled(Container)`
    /* border: 2px solid purple; */
    display: block;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        max-width: 310px;
        margin: 0 auto;
        height: 1392px;
    }
`;

const FifthTitle = styled.h1`
    /* border: 2px solid greenyellow; */
    font-family: Rufina,Roboto,serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: 0.02em;
    text-align: center;
    margin: 0;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        font-size: 36px;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: right;
    }
`;

const PhotoCardsContainer = styled.div`
    border: 1px solid #000;
    border-right: 0;
    border-left: 0;
    width: 100%;
    height: 1630px;
    margin-top: 20px;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        border: none;
        margin-top: 64px;
        height: 1280px;
    }
`;

const CardsLayoutContainer = styled.div`
    /* border: 2px solid red; */
    margin: 40px 26px;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
     @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        margin: 0;
        justify-content: space-between;
    }
`;

const RwdBorder = styled(RwdBorderLine)`
    display: none;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        display: block;
        margin-top: 24px;
    }
`;

const data = [
    { title: 'Woven tape', imageUrl: Fifth1 },
    { title: 'Knit tape', imageUrl: Fifth2 },
    { title: 'Elastic tape', imageUrl: Fifth3 },
    { title: 'Jacquard tape', imageUrl: Fifth4 },
    { title: 'Cord', imageUrl: Fifth5 },
    { title: 'Woven Lable', imageUrl: Fifth6 },
    { title: 'Braid', imageUrl: Fifth7 },
    { title: 'Piping tape', imageUrl: Fifth8 },
    { title: 'Reflect', imageUrl: Fifth9 },
    { title: 'New Item', imageUrl: Fifth10 },
    { title: 'Substain', imageUrl: Fifth11 },
]

const FifthSectionLayout = () => {
    return (
        <FifthContainer>
            <FifthTitle>OUR PRODUCT</FifthTitle>
            <RwdBorder />
            <PhotoCardsContainer>
                <CardsLayoutContainer>
                    {
                        data.map((item, index) => {
                            return (
                                <Card 
                                    key={index}
                                    imageUrl={item.imageUrl}
                                    title={item.title}
                                />
                            )
                        })
                    }
                </CardsLayoutContainer>
            </PhotoCardsContainer>
        </FifthContainer>
    )
};

export default FifthSectionLayout;