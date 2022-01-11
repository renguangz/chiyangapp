import React, { useState } from "react";
import styled from "styled-components";
import { Container, RwdBorderLine } from "../../../common/Container";
import Six1 from '../../../images/Six1.png';
import Six2 from '../../../images/Six2.jpeg';
import Six3 from '../../../images/Six3.jpeg';
import Six4 from '../../../images/Six4.jpeg';
import PhoneIcon from '../../../images/PhoneIcon.png';
import PrinterIcon from '../../../images/PrinterIcon.png';
import MailIcon from '../../../images/MailIcon.png';
import LocationIcon from '../../../images/LocationIcon.png';
import { SwapRightOutlined } from "@ant-design/icons/lib/icons";
import '../../../../App.css';
import RwdSixthSectionCard from "./RwdSixthSectionCard";

const SixthSectionContainer = styled.div`
    /* border: 2px solid green; */
    width: 100%;
    height: 100%;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        max-width: 310px;
        margin: 0 auto;
    }
`;

const Border = styled.div`
    /* background-color: green; */
    border: #6F7263 1px solid;
    border-right: 0;
    width: 60%;
    height: 500px;
    position: absolute;
    right: 0;
    transform: translateY(310px);
    z-index: 0;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        display: none;
    }
`;

const SectionContainer = styled(Container)`
    /* border: 2px solid purple; */
    flex: 1;
    height: 810px;
    margin-bottom: 70px;
    align-items: flex-start;
    z-index: 10;
    @media screen and (max-width: 800px) {
        /* border: 2px solid purple; */
        margin: 0;
        height: 2790px;
    }
`;

const StyledImg = styled.img`
    /* border: 2px solid green; */
    flex: 1;
    height: 660px;
    z-index: 2;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        display: none;
    }
`;

const InfoContainer = styled.div`
    /* border: 2px solid purple; */
    flex: 1;
    height: 772px;
    margin-left: 58px;
    @media screen and (max-width: 800px) {
        /* border: 2px solid yellow; */
        margin-left: 0;
        height: 2808px;
    }
`;

const InfoTitle = styled.h1`
    /* border: 2px solid orange; */
    font-family: Rufina,Roboto,serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: 0.02em;
    text-align: left;
    margin: 0;
    @media screen and (max-width: 800px) {
        /* border: 2px solid orange; */
        font-size: 36px;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: right;
        margin-bottom: 70px;
    }
`;

const ButtonContainer = styled.div`
    /* border: 2px solid steelblue; */
    height: 135px;
    margin-top: 35px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        display: none;
    }
`;

const SixthButton = styled.button`
    border: 1px solid #000000;
    height: 50px;
    margin-right: 32px;
    margin-bottom: 35px;
    padding: 16px 36px;
    font-family: Times;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    transition: all .3s;
    cursor: pointer;
    &:hover {
        background: #000000;
        color: #ffffff;
    }
`;

const DataContainer = styled.div`
    /* border: 2px solid pink; */
    width: 100%;
    margin-top: 90px;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        display: none;
    }
`;

const DataTitle = styled.h2`
    /* border: 2px solid red; */
    margin: 0;
    font-family: Rufina;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: 0em;
    text-align: left;
`;

const DataInfoContainer = styled.div`
    /* border: 2px solid green; */
    height: 196px;
    margin-top: 33px;
`;

const DataInfo = styled.div`
    /* border: 2px solid pink; */
    width: 100%;
    display: flex;
    margin-bottom: 10px;
`;

const InfoIconContainer = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    margin-right: 21px;
`;

const DataInfoIcon = styled.img`
    /* border: 2px solid orange; */
    width: ${props => props.width || 30}px;
    height: ${props => props.height || 30}px;
    margin-right: 21px;
`;

const DataInfoPara = styled.p`
    /* border: 2px solid yellow; */
    width: 100%;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    color: #4F4F4F;
    margin: 0;
`;

const CheckoutButtonContainer = styled.div`
    /* border: 2px solid green; */
    width: 100%;
    height: 50px;
    margin-top: 40px;
    display: flex;
    justify-content: right;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        display: none;
    }
    
`;

const CheckoutButton = styled(SixthButton)`
    background: none;
    width: 160px;
    height: 50px;
    margin-right: 0;
    padding: 12px 21px;
`;

const data = [
    {
        index: 0, title: 'CHR BL HEADQUARTER', phone: '886-2-26194660', printer: '886-2-26194670', mail: 'chunyuco@ms36.hinet.net', location: 'No. 219, Guanhai Blvd., Bali Dist., New Taipei City 249005 , Taiwan(R.O.C.)', rwdImg: Six4
    },
    {
        index: 1, title: 'CHR PT MILL', phone: '886-4-8921408', printer: '886-4-8921409', mail: 'chr02@chunyuco.com.tw', location: 'No. 557, Sec. 4, Zhangshui Rd., Pitou Township, Changhua County 523010 , Taiwan (R.O.C.)', rwdImg: Six3
    },
    {
        index: 2, title: 'CHR SL MILL', phone: '86-0596836-7700', printer: '86-0596836-7900', mail: 'vic.chen@chunyuco.com.tw', location: 'NO.809.Xingtai Industry Park, CHANG TAI COUNTY,ZHANGZHOU CITY ,FUJIAN PROVINGE ,CHINA', rwdImg: Six2
    },
    {
        index: 3, title: 'CHR VN MILL', phone: '0274-3803427', printer: '886-2-26194670', mail: 'ian.chen@chunyuco.com.tw', location: 'Lo C-4D-CN,Khu Cong Nghiep My Phuoc 3, Phuong Thoi Hoa, Ben Cat, Binh Duong, Vietnam', rwdImg: Six1
    },
]

const SixthSectionLayout = () => {
    const [dataIndex, setDataIndex] = useState(0);

    return (
        <SixthSectionContainer>
            <Border />
            <SectionContainer>
                <StyledImg src={Six1} alt='Six1' />
                <InfoContainer>
                    <InfoTitle>OUR LOCATION</InfoTitle>
                    <RwdBorderLine />
                    {
                        data.map(item => (
                            <RwdSixthSectionCard
                                key={item.index}
                                title={item.title}
                                phone={item.phone}
                                printer={item.printer}
                                mail={item.mail}
                                location={item.location}
                                rwdImg={item.rwdImg}
                            />
                        ))
                    }
                    <ButtonContainer>
                        {
                            data.map(item => (
                                <SixthButton
                                    key={item.index}
                                    onClick={() => setDataIndex(item.index)}
                                    className={item.index === dataIndex ? 'sixthButtonClick' : 'sixthButtonUnclick'}
                                >
                                    {item.title}
                                </SixthButton>
                            ))
                        }
                    </ButtonContainer>
                    <DataContainer key={dataIndex}>
                        <DataTitle>{data[dataIndex].title}</DataTitle>
                        <DataInfoContainer>
                            <DataInfo>
                                <InfoIconContainer>
                                    <DataInfoIcon src={PhoneIcon} alt='PhoneIcon' />
                                </InfoIconContainer>
                                <DataInfoPara>{data[dataIndex].phone}</DataInfoPara>
                            </DataInfo>
                            <DataInfo>
                                <InfoIconContainer>
                                    <DataInfoIcon src={PrinterIcon} alt='PrinterIcon' />
                                </InfoIconContainer>
                                <DataInfoPara>{data[dataIndex].printer}</DataInfoPara>
                            </DataInfo>
                            <DataInfo>
                                <InfoIconContainer>
                                    <DataInfoIcon src={MailIcon} alt='MailIcon' height={20} />
                                </InfoIconContainer>
                                <DataInfoPara>{data[dataIndex].mail}</DataInfoPara>
                            </DataInfo>
                            <DataInfo>
                                <InfoIconContainer>
                                    <DataInfoIcon width={20} src={LocationIcon} alt='LocationIcon' />
                                </InfoIconContainer>
                                <DataInfoPara>
                                    {data[dataIndex].location}
                                </DataInfoPara>
                            </DataInfo>
                        </DataInfoContainer>
                    </DataContainer>
                    <CheckoutButtonContainer>
                        <CheckoutButton>
                            CHECK
                            <SwapRightOutlined style={{ fontSize: 24, marginLeft: '20px' }} />
                        </CheckoutButton>
                    </CheckoutButtonContainer>
                </InfoContainer>
            </SectionContainer>
        </SixthSectionContainer >
    )
};

export default SixthSectionLayout;