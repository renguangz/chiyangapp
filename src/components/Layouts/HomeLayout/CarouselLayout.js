import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel1 from '../../images/Carousel1.png';
import Carousel2 from '../../images/Carousel2.jpg';
import Six4 from '../../images/Six4.jpeg';
import { SwapLeftOutlined, SwapRightOutlined } from '@ant-design/icons/lib/icons';
import '../../../App.css';

const CarouselSectionPart = styled.div`
    width: 100vw;
    height: 800px;
    overflow: hidden;
`;

const CarouselContainer = styled.div`
    /* border: 2px solid purple; */
    width: 300vw;
    height: 800px;
    display: flex;
    transform: ${props => `translateX(-${props.translateX}vw)`};
    transition: transform .2s;
`;

const CarouselImg = styled.img`
    /* border: 2px solid green; */
    width: 100vw;
    height: 800px;
`;

const ControlButtonsContainer = styled.div`
    /* border: 2px solid pink; */
    width: 100vw;
    height: 140px;
    position: absolute;
    bottom: 0;
`;

const LeftRightButtonContainer = styled.div`
    /* border: 2px solid purple; */
    flex: 1;
    height: 90px;
    margin: 0 40px;
`;

const LeftButton = styled.button`
    border: 2px solid #867F74;
    outline: none;
    background: none;
    display: block;
    width: 40px;
    height: 40px;
    cursor: pointer;
`;

const RightButton = styled(LeftButton)`
    margin-top: 10px;
`;

const UnclickableButton = styled(LeftButton)`
    opacity: 0.4;
    cursor: auto;
`;

const CircleButtonContainer = styled.div`
    /* border: 2px solid green; */
    width: 96px;
    height: 16px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CircleButton = styled.button`
    background: #FFFFFF;
    opacity: 40%;
    border: none;
    outline: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    cursor: pointer;
`;

const carouselDatas = [
    { index: 0, imageUrl: Carousel1, translateX: 0 },
    { index: 1, imageUrl: Carousel2, translateX: 100 },
    { index: 2, imageUrl: Six4, translateX: 200 },
]

const CarouselLayout = () => {
    const [translate, setTranslate] = useState(0);
    const [dataIndex, setDataIndex] = useState(0);

    const handleClickRight = () => {
        setTranslate(translate + 100);
        setDataIndex(dataIndex + 1);
    }

    const handleClickLeft = () => {
        setTranslate(translate - 100);
        setDataIndex(dataIndex - 1);
    }

    return (
        <CarouselSectionPart>
            <CarouselContainer translateX={translate}>
                {
                    carouselDatas.map(item => (
                        <CarouselImg
                            key={item.index}
                            src={item.imageUrl}
                            alt='carousel'
                        />
                    ))
                }
            </CarouselContainer>
            <ControlButtonsContainer>
                <LeftRightButtonContainer>
                    {
                        dataIndex === 0 ? (
                            <UnclickableButton>
                                <SwapLeftOutlined style={{ color: '#867F74', fontSize: '24px' }} />
                            </UnclickableButton>
                        ) : (
                            <LeftButton onClick={handleClickLeft}>
                                <SwapLeftOutlined style={{ color: '#867F74', fontSize: '24px' }} />
                            </LeftButton>
                        )
                    }
                    {
                        dataIndex === 2 ? (
                            <UnclickableButton style={{ marginTop: '10px' }}>
                                <SwapRightOutlined style={{ color: '#867F74', fontSize: '24px' }} />
                            </UnclickableButton>
                        ) : (
                            <RightButton onClick={handleClickRight}>
                                <SwapRightOutlined style={{ color: '#867F74', fontSize: '24px' }} />
                            </RightButton>
                        )
                    }
                </LeftRightButtonContainer>
                <CircleButtonContainer>
                    {
                        carouselDatas.map(item => (
                            <CircleButton
                                className={dataIndex === item.index ? 'focusCircleButton' : ''}
                                key={item.index}
                                onClick={() => {
                                    setTranslate(item.translateX)
                                    setDataIndex(item.index)
                                }}
                            />
                        ))
                    }
                </CircleButtonContainer>
            </ControlButtonsContainer>
        </CarouselSectionPart>
    );
};

export default CarouselLayout;