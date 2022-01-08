import React from 'react';
import styled from "styled-components";

const CardContainer = styled.div`
    /* border: 2px solid purple; */
    flex: 1;
    height: 100%;
    margin-right: 30px;
    &:last-child {
        margin-right: 0;
    }
`;

const CardImg = styled.img`
    /* border: 2px solid green; */
    height: 360px;
    width: 100%;
    margin-bottom: 37px;
`;

const CardTitle = styled.h3`
    font-family: Roboto;
    font-size: 40px;
    font-weight: 900;
    line-height: 47px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 20px;
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
    /* width: 320px; */
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