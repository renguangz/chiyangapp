import React, { useState } from 'react';
import styled from 'styled-components';
import FourthImgTitle from '../../../images/FourthImgTitle.png';
import Fourth1 from '../../../images/Fourth1.png';
import Fourth2 from '../../../images/Fourth2.png';
import Fourth3 from '../../../images/Fourth3.png';
import { SwapLeftOutlined, SwapRightOutlined } from '@ant-design/icons/lib/icons';
import ButtonsLayout from './ButtonsLayout';

const FourthContainer = styled.div`
    /* border: 2px solid steelblue; */
    height: 100%;
    display: flex;
    flex: 1;
    margin-right: 8%;
`;

const ImgTitleContainer = styled.div`
    /* border: 2px solid orange; */
    height: 100%;
    display: flex;
    flex: 4;
    margin-right: 57px;
`;

const ImgContainer = styled.div`
    /* border: 2px solid purple; */
    border-radius: 50%;
    height: 778px;
    width: 778px;
    margin: 46px 0;
    position: absolute;
    transform: translateX(-339px);
`;

const TitleContainer = styled.div`
    /* border: 2px solid gold; */
    height: 100%;
    width: 468px;
    position: absolute;
    left: 2.8%;
`;

const ContentContainer = styled.div`
    /* border: 2px solid pink; */
    flex: 6;
    margin-top: 70px;
`;

const ContentTitle = styled.h1`
    /* border: 2px solid steelblue; */
    font-family: Rufina,Roboto,serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #000;
    margin: 0;
`;

const Border = styled.div`
    width: 100%;
    height: 1px;
    background: #000000;
    margin: 45px 0;
`;

const ParaTitle = styled.h3`
    /* border: 2px solid blue; */
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 47px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
`;

const Para = styled.h4`
    /* border: 2px solid green; */
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
    margin-top: 15px;
    height: 437px;
`;

const ButtonContainer = styled.div`
    /* border: 2px solid black; */
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const StyledButton = styled.button`
    border: 1px solid #000000;
    height: 60px;
    width: 200px;
    background: #000000;
    padding: 0;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent || 'flex-start'};
    color: #F5F2E8;
    transition: background-color .3s;
    cursor: pointer;
    &:hover {
        background-color: #F5F2E8;
        color: #000000;
    }
`;

const UnclickableButton = styled(StyledButton)`
    border: none;
    background: #C1BFBD;
    cursor: auto;
    pointer-events: none;
`;

const ButtonWordContainer = styled.div`
    /* border: 2px solid white; */
    margin: 20px 30px;
    flex: 1;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const data = [
    { index: 0, cardImg: Fourth1, title: 'Design', para: 'Years of experience in cooperation with major sports brands and understanding of various customer needs. Provide new design ideas every season and continue to invest in new machines to increase R&D efficiency. R&D staff of each factory to provide localized services quickly and shorten the development time. Leading the brand to break through the past new concepts to conceive new products like never before.' },
    { index: 1, cardImg: Fourth2, title: 'Production', para: 'We have hundreds of machines for weaving,jacquard, knitting, braiding, etc. Mature and professional partner with strict control of raw materials and processing quality.  Monthly production capacity of 25 million yards, can provide a large number of stable products. Four production bases to pursue localized production and reduce transportation time. Distribute the external risks, support each other and reduce delay. To face the global crisis, we have flexibly adjusted our production line to maintain a stable supply. New production lines and innovation continue to be launched.' },
    { index: 2, cardImg: Fourth3, title: 'In House Laboratory', para: 'Our laboratory adheres to the spirit of prudent research, strict quality control of our products, and the development of industry-leading technologies. Textile-related tests are conducted in accordance with international standard test methods and environmental conditions to obtain reliable and relevant data.' },
]

const FourthSectionLayout = () => {
    const [dataIndex, setDataIndex] = useState(0);
    const handleNext = () => {
        setDataIndex(dataIndex + 1);
    }

    const handlePrev = () => {
        setDataIndex(dataIndex - 1);
    }

    return (
        <FourthContainer>
            <ImgTitleContainer>
                <ImgContainer>
                    <img src={data[dataIndex].cardImg} alt='roundImg' />
                </ImgContainer>
                <TitleContainer>
                    <img src={FourthImgTitle} alt='titleImg' />
                </TitleContainer>
            </ImgTitleContainer>
            <ContentContainer>
                <ContentTitle>WHY YOU SHOULD WORK WITH US</ContentTitle>
                <Border />
                <ParaTitle>{data[dataIndex].title}</ParaTitle>
                <Para>
                    {data[dataIndex].para}
                </Para>
                <ButtonContainer>
                    {
                        dataIndex === 0 ? (
                            <UnclickableButton>
                                <ButtonsLayout prev
                                    prevIcon={<SwapLeftOutlined style={{ fontSize: '24px' }} />}
                                />
                            </UnclickableButton>
                        ) : (
                            <StyledButton onClick={handlePrev}>
                                <ButtonsLayout prev
                                    prevIcon={<SwapLeftOutlined style={{ fontSize: '24px' }} />}
                                />
                            </StyledButton>
                        )
                    }
                    {
                        dataIndex === 2 ? (
                            <UnclickableButton>
                                <ButtonsLayout
                                    nextIcon={<SwapRightOutlined style={{ fontSize: '24px' }} />}
                                />
                            </UnclickableButton>
                        ) : (
                            <StyledButton onClick={handleNext}>
                                <ButtonsLayout
                                    nextIcon={<SwapRightOutlined style={{ fontSize: '24px' }} />}
                                />
                            </StyledButton>
                        )
                    }
                </ButtonContainer>
            </ContentContainer>
        </FourthContainer>
    )
};

export default FourthSectionLayout;