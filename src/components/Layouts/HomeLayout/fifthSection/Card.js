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