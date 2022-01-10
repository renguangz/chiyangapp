import React, { useState } from "react";
import styled from "styled-components";
import CloseButton from '../../images/CloseButton.png';
import SearchIcon from '../../images/hoverSearchIcon.png';

const HeaderMenuContainer = styled.div`
    /* border: 2px solid green; */
    height: 578px;
    flex: 1;
    margin: 25px 35px;
    color: #F5F2E8;
`;

const CloseButtonContainer = styled.div`
    /* border: 2px solid orange; */
    flex: 1;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 45px;
`;

const ButtonClose = styled.img`
    width: 30px;
    height: 30px;
`;

const SearchContainer = styled.div`
    border: 1px solid #F5F2E8;
    border-left: 0;
    border-right: 0;
    height: 50px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
`;

const InputContainer = styled.div`
    /* border: 2px solid pink; */
    margin: 5px 9px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
`;

const SearchInput = styled.input`
    /* border: 2px solid green; */
    border: none;
    outline: none;
    background: none;
    flex: 1;
    height: 40px;
    margin: 0 26px;
    font-family: Roboto;
    font-weight: 700;
    font-size: 24px;
    &::placeholder {
        color: #F5F2E8;
        opacity: 30%;
    }
`;

const TagContainer = styled.div`
    /* border: 2px solid purple; */
    flex: 1;
`;

const TagButton = styled.span`
    /* border: 2px solid pink; */
    cursor: pointer;
    height: 28px;
    font-family: Times;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    display: block;
    text-align: left;
    margin-bottom: 30px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const AboutTagContainer = styled.div`
    /* border: 2px solid orange; */
    border-left: 1px solid #F5F2E8;
    height: 185px;
    display: ${props => props.display};
    margin: 0 8px;
    padding-left: 29px;
    margin-bottom: 30px;
`;

const AboutTag = styled.span`
    /* border: 2px solid green; */
    display: block;
    font-family: Times;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
    margin-bottom: 32px;
`;

const tagButtons = ['NEWS', 'PRODUCT', 'CONTACT', 'DOWNLOAD', '繁體中文']
const aboutTags = ['Corporate Vision', 'Sustainability', 'Location', 'Join Us']

const HeaderMenu = ({ closeMenu }) => {
    const [aboutDisplay, setAboutDisplay] = useState(false);

    return (
        <HeaderMenuContainer>
            <CloseButtonContainer>
                <ButtonClose src={CloseButton} alt='CloseButton'
                    onClick={closeMenu}
                />
            </CloseButtonContainer>
            <SearchContainer>
                <InputContainer>
                    <img src={SearchIcon} alt='SearchIcon' style={{ width: '24px', height: '24px' }} />
                    <SearchInput 
                        placeholder='search'
                    />
                    <img src={CloseButton} alt='CloseButton' style={{ width: '16px', height: '16px' }} />
                </InputContainer>
            </SearchContainer>
            <TagContainer>
                <TagButton onClick={() => setAboutDisplay(!aboutDisplay)}>ABOUT</TagButton>
                <AboutTagContainer display={aboutDisplay ? 'block' : 'none'}>
                    {
                        aboutTags.map((item, index) => (
                            <AboutTag key={index}>{item}</AboutTag>
                        ))
                    }
                </AboutTagContainer>
                {
                    tagButtons.map((item, index) => (
                        <TagButton key={index}>{item}</TagButton>
                    ))
                }
            </TagContainer>
        </HeaderMenuContainer>
    )
};

export default HeaderMenu;