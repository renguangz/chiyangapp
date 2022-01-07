import React from 'react';
import styled from 'styled-components';
import { Colors } from '../Colors';
import { Container } from '../Container';
import AboutCard from './AboutCard';
import About1 from '../../images/About1.png';
import About2 from '../../images/About2.png';
import About3 from '../../images/About3.png';
import About4 from '../../images/About4.png';

const AboutContainer = styled.div`
    /* border: 2px solid steelblue; */
    display: ${props => props.mouseOver ? 'block' : 'none'};
    background: ${Colors.latteBgc};
    backdrop-filter: blur(30px);
    opacity: 90%;
    width: 100%;
    height: 300px;
    &:hover {
        display: block;
    }
`;

const cards = [
    { cardTitle: 'Corporate Vision', imgBgc: About1 },
    { cardTitle: 'Sustainability', imgBgc: About2 },
    { cardTitle: 'Location', imgBgc: About3 },
    { cardTitle: 'Join Us', imgBgc: About4 },
]

const AboutHover = ({ mouseOver }) => {
    return (
        <AboutContainer mouseOver={mouseOver}>
            <Container>
                {
                    cards.map((item, index) => (
                        <AboutCard
                            key={index}
                            title={item.cardTitle}
                            imgBgc={item.imgBgc}
                        />
                    ))
                }
            </Container>
        </AboutContainer>
    )
};

export default AboutHover;