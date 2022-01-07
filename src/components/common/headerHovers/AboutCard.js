import React from "react";
import styled from "styled-components";

const AboutCardContainer = styled.div`
    /* border: 2px solid orange; */
    width: 240px;
    height: 190px;
    cursor: pointer;
`;

const CardImgContainer = styled.div`
    /* border: 2px solid white; */
    width: 240px;
    height: 135px;
    background-image: url(${props => props.imgBgc});
    background-position: center;
    background-size: cover;
    &:before {
        content: '';
        display: block;
        height: 5px;
    }
    &:after {
        content: '';
        display: block;
        height: 185px;
        width: 230px;
        border: 1px solid #F5F2E8;
        margin: 0 auto;
    }
`;

const CardTitleContainer = styled.div`
    /* border: 2px solid red; */
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CardTitle = styled.span`
    font-family: Times;
    font-weight: 400;
    font-size: 20px;
    color: #F5F2E8;

`;

const AboutCard = ({ title, imgBgc }) => {
    return (
        <AboutCardContainer>
            <CardImgContainer imgBgc={imgBgc} />
            <CardTitleContainer>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardTitleContainer>
        </AboutCardContainer>
    )
};

export default AboutCard;