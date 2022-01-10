import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from '../../../images/Arrow.png';
import '../../../../App.css';

const CardContainer = styled.div`
    /* border: 2px solid green; */
    background-image: url(${props => props.imageUrl});
    background-position: center;
    background-size: cover;
    width: 360px;
    height: 360px;
    cursor: pointer;
    margin-right: 30px;
    margin-bottom: 30px;
    &:nth-child(3n+3) {
        margin-right: 0;
    }
    @media screen and (max-width: 800px) {
        border: 1px solid #808080;
        width: 150px;
        height: 190px;
        margin: 0;
        margin-bottom: 26px;
        background-image: none;
    }
`;

const RwdCardImg = styled.img`
    display: none;
     @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        display: block;
        width: 140px;
        height: 140px;
        margin: 5px;
        margin-bottom: 0;
    }
`;

const RwdCardTitle = styled.p`
    /* border: 2px solid pink; */
    display: none;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    color: #808080;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        display: block;
        margin: 0;
        margin-top: 6px;
    }
`;

const HoverBackground = styled.div`
    border: 1px solid transparent;
    width: 100%;
    height: 100%;
    opacity: 0;
    &:hover {
        background: #000000;
        opacity: 0.7;
    }
     @media screen and (max-width: 800px) {
        display: none;
    }
`;

const Hover = styled.div`
    /* border: 1px solid #F5F2E8; */
    height: 306px;
    width: 306px;
    margin: 27px;
    margin-bottom: 0;
`;

const HoverContainer = styled.div`
    /* border: 2px solid purple; */
    flex: 1;
    height: 256px;
    margin: 25px;
`;

const HoverTitleContainer = styled.div`
    /* border: 2px solid blue; */
    flex: 1;
    height: 228px;
`;

const HoverTitle = styled.span`
    /* border: 2px solid pink; */
    font-family: Roboto;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
    color: #F5F2E8;
`;

const MoreContainer = styled.div`
    /* border: 2px solid orangered; */
    display: flex;  
    flex: 1;
    height: 28px;
    justify-content: flex-end;
    flex: wrap;
`;

const MoreImg = styled.img`
    /* border: 2px solid green; */
    width: 29.83px;
    height: 9px;
    margin-top: 5px;
    margin-left: 18px;
`;

const MoreText = styled.span`
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: #F5F2E8;
`;

const Card = ({ imageUrl, title }) => {
    const [mouseenter, setMouseEnter] = useState(true);

    return (
        <CardContainer imageUrl={imageUrl}>
            <RwdCardImg src={imageUrl} alt='rwd image' />
            <RwdCardTitle>{title}</RwdCardTitle>
            <HoverBackground 
            onMouseEnter={() => setMouseEnter(true)} 
            onMouseLeave={() => setMouseEnter(false)}>
                <Hover className={mouseenter ? 'fifthCard': ''} >
                    <HoverContainer>
                        <HoverTitleContainer>
                            <HoverTitle>{title}</HoverTitle>
                        </HoverTitleContainer>
                        <MoreContainer>
                            <MoreText>MORE</MoreText>
                            <MoreImg src={Arrow} alt='arrow' />
                        </MoreContainer>
                    </HoverContainer>
                </Hover>
            </HoverBackground>
        </CardContainer>
    )
};

export default Card;