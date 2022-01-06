import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    border: 1px solid pink;
    width: 100vw;
    height: 100px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            Header width: 1920, height: 100
        </HeaderContainer>
    )
};

export default Header;