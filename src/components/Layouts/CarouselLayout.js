import React from 'react';
import styled from 'styled-components';
// import 'antd/dist/antd.css';
// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css';
// import { Carousel } from 'antd';
import Carousel1 from '../images/Carousel1.png';
// import Carousel2 from '../images/Carousel2.jpg';

const StyledImg = styled.div`
    /* border: 2px solid green; */
    height: 800px;
    background-image: url(${props => props.imgUrl});
    background-position: center;
    background-size: cover;
`;

const CarouselLayout = () => {
    return (
        <StyledImg imgUrl={Carousel1} />
    );
};

export default CarouselLayout;