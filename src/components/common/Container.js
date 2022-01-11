import styled from "styled-components";

export const Container = styled.div`
    /* border: 1px solid steelblue; */
    height: 100%;
    flex: 1;
    margin: 0 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* max-width: 1200px; */
    /* margin: 0 auto; */
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        margin: 0 30px;
    }
`;

export const RwdContainer = styled(Container)`
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        max-width: 310px;
        margin: 0 auto;
        height: 1392px;
    }
`;

export const RwdBorderLine = styled.div`
    width: 100%;
    height: 1px;
    background: #000000;
    margin: 45px 0;
    @media screen and (max-width: 800px) {
        width: 55%;
        margin-top: -44px;
        margin-bottom: 0;
        position: absolute;
        right: 0;
    }
`;

export const RwdTitle = styled.h1`
    /* border: 2px solid greenyellow; */
    font-family: Rufina,Roboto,serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: 0.02em;
    text-align: center;
    margin: 0;
    display: none;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        font-size: 36px;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: right;
    }
`;