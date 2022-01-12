import React from "react";
import styled from "styled-components";
import { Container, RwdBorderLine } from "../../../common/Container";
import ThirdSectionCard from "./ThirdSectionCard";
import Card1 from '../../../images/Card1.png';
import Card2 from '../../../images/Card2.png';
import Card3 from '../../../images/Card3.png';

const LayoutContainer = styled.div`
    /* border: 2px solid purple; */
    height: 1044px;
    flex: 1;
    width: 100%;
    @media screen and (max-width: 800px) {
        /* border: 2px solid purple; */
        height: 1952px;
    }
`;

const TopItemContainer = styled.div`
    background-color: #6F7263;
    width: 70%;
    height: 500px;
    position: absolute;
    right: 0;
    display: flex;
    justify-content: right;
    @media screen and (max-width: 800px) {
        /* border: 2px solid pink; */
        width: 100%;
        height: 240px;

    }
`;

const TitleBorder = styled.div`
    /* border: 2px solid pink; */
    width: 800px;
    width: 36vw;
    height: 1px;
    background-color: #F5F2E8;
    margin-top: 140px;
    display: block;
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

const ItemTitleContainer = styled.div`
    /* border: 2px solid transparent; */
    display: block;
    width: 100%;
    padding-top: 60px;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        padding-top: 44px;
    }
`;

const ItemTitle = styled.h1`
    /* border: 2px solid green; */
    font-family: Rufina,Roboto,serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: 0.02em;
    text-align: right;
    color: #F5F2E8;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        font-family: Times;
        font-size: 30px;
        letter-spacing: 0em;
    }
`;

const CardsLayout = styled.div`
    /* border: 2px solid black; */
    width: 100%;
    height: 828.5px;
    margin-top: 90px;
    display: flex;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        display: block;
        margin-top: 36px;
    }
`;

const StyledContainer = styled(Container)`
    /* border: 2px solid green; */
    position: relative;
    display: block;
    z-index: 1;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        max-width: 310px;
        margin: 0 auto;
    }
`;

const StyledRwdBorder = styled(RwdBorderLine)`
    display: none;
    background: #fff;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        display: block;
        /* transform: translateY(114px); */
        margin-top: 114px;
    }
`;

const cardsData = [
    { src: Card1, cardTitle: 'Sustainable', cardPara: 'Energy-saving and carbon reduction, Waste recycling , Environmental friendly. Targeting Zero Waste: Realizing a Cradle-to-Cradle Green Economy. The Green cycle will turn the perpetual machine of sustainable development.' },
    { src: Card2, cardTitle: 'Innovation', cardPara: 'We are willing to try new materials, new machines, and new practices. Our innovation may not be revolutionary, but it is definitely a step-by-step process.' },
    { src: Card3, cardTitle: 'Service', cardPara: "Quick sampling, accurate color matching, and accurate inspection. Robust service." },
]

const ThirdSectionLayout = () => {
    return (
        <LayoutContainer>
            <TopItemContainer>
                <TitleBorder />
            </TopItemContainer>
            <StyledRwdBorder />
            <StyledContainer>
                <ItemTitleContainer>
                    <ItemTitle>WHAT WE DO</ItemTitle>
                </ItemTitleContainer>
                <CardsLayout>
                    {
                        cardsData.map((item, index) => (
                            <ThirdSectionCard
                                key={index}
                                src={item.src}
                                cardTitle={item.cardTitle}
                                cardPara={item.cardPara}
                            />
                        ))
                    }
                </CardsLayout>
            </StyledContainer>
        </LayoutContainer>
    )
};

export default ThirdSectionLayout;