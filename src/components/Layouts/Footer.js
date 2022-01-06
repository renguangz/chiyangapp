import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    /* border: 1px solid green; */
    width: 100vw;
    height: 400px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            Footer width: 1920, height: 400, bgc: #DFDFDF
        </FooterContainer>
    )
};

export default Footer;