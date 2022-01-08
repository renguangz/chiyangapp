import React from 'react';
import styled from 'styled-components';

const ButtonWordContainer = styled.div`
    /* border: 2px solid white; */
    margin: 20px 30px;
    flex: 1;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${props => props.paddingLeft}px;
`;

const ButtonWords = styled.span`
    /* border: 2px solid pink; */
    font-family: Times;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    text-align: center;
`;

const ButtonsLayout = ({ prev, prevIcon, nextIcon }) => {
    return (
        <ButtonWordContainer paddingLeft={prev ? 0 : 32}>
            {prevIcon}
            <ButtonWords>
                {
                    prev ? ('PREVIOUS') : ('NEXT')
                }
            </ButtonWords>
            {nextIcon}
        </ButtonWordContainer>
    )
};

export default ButtonsLayout;