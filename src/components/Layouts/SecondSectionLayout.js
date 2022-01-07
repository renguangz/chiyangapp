import React from "react";
import styled from "styled-components";
import { Container } from "../common/Container";

const SectionContainer = styled.div`
    /* background-color: pink; */
    margin-top: 164px;
    margin-bottom: 170px;
    width: 100%;
    height: 294px;
    flex: 1;
    margin: 170px auto;
`;

const SectionTitle = styled.h1`
    /* border: 2px solid green; */
    font-family: Rufina;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: 0.02em;
    text-align: center;
    margin: 0;
`;

const SectionParaContainer = styled.div`
    /* border: 2px solid green; */
    height: 200px;
    margin-top: 30px;
`;

const SectionPara = styled.p`
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    margin: 0;
`;

const SecondSectionLayout = () => {
    return (
        <Container>
            <SectionContainer>
                <SectionTitle>Sustainable development and Social prosp</SectionTitle>
                <SectionParaContainer>
                    <SectionPara>
                        CHR uphold our vision of “Sustainable development and Social prosperity”, In the terms of environmental sustainability, CHR regards water、climate change and energy management as our challenges and opportunities and integrates them with operational development closely. CHR ask our partner to
                        join us with power-saving、water-saving as well as waste reduction and cooperate with our customers to design product recycling and waste reuse.
                    </SectionPara>
                </SectionParaContainer>
            </SectionContainer>
        </Container>
    )
};

export default SecondSectionLayout;