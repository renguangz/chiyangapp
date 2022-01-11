import React from "react";
import styled from "styled-components";
import PhoneIcon from '../../../images/PhoneIcon.png';
import PrinterIcon from '../../../images/PrinterIcon.png';
import MailIcon from '../../../images/MailIcon.png';
import LocationIcon from '../../../images/LocationIcon.png';
import { SwapRightOutlined } from "@ant-design/icons/lib/icons";

const RwdSectionCardContainer = styled.div`
    /* border: 2px solid steelblue; */
    flex: 1;
    height: 620px;
    display: none;
    margin-bottom: 66px;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        display: block;
    }
`;

const CardBgImg = styled.div`
    border: 2px solid transparent;
    height: 310px;
    width: 310px;
    background-image: url(${props => props.bgImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const CardImgBorder = styled.div`
    border: 1px solid #6F7263;
    border-bottom: 0;
    margin: 5px 6px;
    margin-bottom: 0;
    flex: 1;
    height: 245px;
`;

const CardImgBlur = styled.div`
    /* border: 2px solid red; */
    height: 85px;
    flex: 1;
    margin: 0;
    backdrop-filter: blur(10px);
`;

const CardBlurBorder = styled.div`
    border: 1px solid #6F7263;
    margin: 0 6px;
    height: 85px;
    flex: 1;
    border-top: 0;
    border-bottom: 0;
`;

const CardInfoContainer = styled.div`
    /* border: 2px solid orangered; */
    border-bottom: 1px solid #000000;
    margin: 0 auto;
    width: 248px;
    height: 60px;
    display: flex;
    flex-wrap: wrap;
`;

const BottomCardInfoContainer = styled(CardInfoContainer)`
    border: none;
    height: 260px;
`;

const BottomInfo = styled.div`
    /* border: 2px solid green; */
    width: 100%;
    display: flex;
    /* margin: 0; */
    margin-bottom: 13px;
`;

const BottomInfoIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 21px;
    margin-top: 2px;
`;

const BottomInfoSpan = styled.span`
    /* border: 1px solid pink; */
    flex: 1;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
`;

const CardInfoTitle = styled.h3`
    /* border: 1px solid blue; */
    margin: auto 0;
    font-family: Rufina,Roboto,serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
`;

const ButtonContainer = styled.div`
    /* border: 2px solid black; */
    height: 40px;
    flex: 1;
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
`;

const CheckButton = styled.button`
    /* border: 1px solid pink; */
    border: none;
    background: #000000;
    outline: none;
    width: 108px;
    height: 40px;
    display: flex;
    cursor: pointer;
    justify-content: center;
`;

const CheckText = styled.span`
    font-family: Times;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    margin: auto 0;
    margin-right: 10px;
`;

const CardBorder = styled.div`
    border: 1px solid #6F7263;
    border-top: 0;
    flex: 1;
    height: 300px;
    margin: 5px 6px;
    margin-top: 0;
`;

const RwdSixthSectionCard = ({ title, phone, printer, mail, location, rwdImg }) => {
    const infoIconList = [
        { icon: PhoneIcon, data: phone },
        { icon: PrinterIcon, data: printer },
        { icon: MailIcon, data: mail },
        { icon: LocationIcon, data: location },
    ]

    return (
        <RwdSectionCardContainer>
            <CardBgImg bgImage={rwdImg}>
                <CardImgBorder>
                </CardImgBorder>
                <CardImgBlur>
                    <CardBlurBorder>
                        <CardInfoContainer>
                            <CardInfoTitle>
                                {title}
                            </CardInfoTitle>
                        </CardInfoContainer>
                    </CardBlurBorder>
                </CardImgBlur>
                <CardBorder>
                    <BottomCardInfoContainer>
                        {
                            infoIconList.map((item, index) => (
                                <BottomInfo key={index}>
                                    <BottomInfoIcon src={item.icon} alt='icon' />
                                    <BottomInfoSpan>{item.data}</BottomInfoSpan>
                                </BottomInfo>
                            ))
                        }
                        <ButtonContainer>
                            <CheckButton>
                                <CheckText>CHECK</CheckText>
                                <SwapRightOutlined style={{ color: '#fff', fontSize: '20px', margin: '8px 0' }} />
                            </CheckButton>
                        </ButtonContainer>
                    </BottomCardInfoContainer>
                </CardBorder>
            </CardBgImg>
        </RwdSectionCardContainer>
    )
};

export default RwdSixthSectionCard;