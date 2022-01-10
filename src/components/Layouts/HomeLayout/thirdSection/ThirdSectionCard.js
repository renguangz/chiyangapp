import React from 'react';
import styled from "styled-components";

const CardContainer = styled.div`
    /* border: 2px solid purple; */
    flex: 1;
    /* height: 100%; */
    margin-right: 30px;
    &:last-child {
        margin-right: 0;
    }
    @media screen and (max-width: 800px) {
        /* border: 1px solid purple; */
        margin-right: 0;
        max-height: 680px;
        margin-bottom: 60px;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

const CardImg = styled.img`
    /* border: 2px solid green; */
    height: 360px;
    width: 100%;
    margin-bottom: 37px;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        width: 310px;
        height: 310px;
        margin-bottom: 28px;
    }
`;

const CardTitle = styled.h3`
    font-family: Roboto;
    font-size: 40px;
    font-weight: 900;
    line-height: 47px;
    letter-spacing: 0em;
    text-align: center;
    margin: 0;
    margin-bottom: 20px;
    @media screen and (max-width: 800px) {
        font-size: 32px;
        font-weight: 700;
        line-height: 38px;
        text-align: center;
        margin-bottom: 17px;
    }
`;

const CardPara = styled.h4`
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    color: #4F4F4F;
    white-space: pre-line;
    margin: 0;
    @media screen and (max-width: 800px) {
        font-size: 18px;
        line-height: 30px;
    }
`;

const ThirdSectionCard = ({ src, cardTitle, cardPara }) => {
    return (
        <CardContainer>
            <CardImg src={src} />
            <CardTitle>{cardTitle}</CardTitle>
            <CardPara>{cardPara}</CardPara>
        </CardContainer>
    )
};

export default ThirdSectionCard;