import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../Colors';
import HoverSearchIcon from '../../images/hoverSearchIcon.png';
import HoverCloseIcon from '../../images/HoverCloseIcon.png';

const SearchContainer = styled.div`
    /* border: 2px solid green; */
    display: ${props => props.mouseOver ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    height: 80px;
    background-color: ${Colors.latteBgc};
    opacity: 0.9;
    backdrop-filter: blur(30px);
    &:hover {
        display: flex;
    }
`;

const SearchInputContainer = styled.div`
    border: 1px solid #F5F2E8;
    border-left: 0;
    border-right: 0;
    height: 42px;
    width: 600px;
    display: flex;
    align-items: center;
`;

const IconContainer = styled.img`
    /* border: 1px solid black; */
    width: 24px;
    height: 24px;
`;

const InputContainer = styled.input`
    /* border: 1px solid blue; */
    outline: none;
    border: none;
    background: none;
    flex: 1;
    height: 24px;
    margin: 0 19px;
    font-size: 24px;
    font-weight: 400;
    color: #F5F2E8;
    &::placeholder {
        color: #F5F2E8;
        opacity: 0.3;
        font-size: 24px;
        font-weight: 400;
    }
`;

const SearchHover = ({ mouseOver }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <SearchContainer mouseOver={mouseOver}>
            <SearchInputContainer>
                <IconContainer src={HoverSearchIcon} alt='search' />
                <InputContainer 
                    placeholder='search'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <IconContainer src={HoverCloseIcon} alt='close' />
            </SearchInputContainer>
        </SearchContainer>
    )
};

export default SearchHover