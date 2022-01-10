import React from "react";
import styled from 'styled-components';

const RwdCardContainer = styled.div`
    display: none;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        display: block;
    }
`;

const ImgContainer = styled.div`
    /* border: 2px solid purple; */
    width: 260px;
    height: 260px;
    margin: 0 auto;
    border-radius: 50%;
    margin-bottom: 24px;
`;

const CardTitle = styled.h2`
    /* border: 2px solid pink; */
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;
    margin: 0;
    margin-bottom: 20px;
`;

const CardPara = styled.p`
    /* border: 2px solid green; */
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    margin: 0;
    margin-bottom: 40px;
`;

const RwdCard = ({ cardImg, cardTitle, cardPara }) => {
    return (
        <RwdCardContainer>
            <ImgContainer>
                <img src={cardImg} alt='card img'
                    style={{ width: '100%', height: '100%' }}
                />
            </ImgContainer>
            <CardTitle>{cardTitle}</CardTitle>
            <CardPara>{cardPara}</CardPara>
        </RwdCardContainer>
    )
};

export default RwdCard;