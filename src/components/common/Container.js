import styled from "styled-components";

export const Container = styled.div`
    /* border: 1px solid steelblue; */
    height: 100%;
    flex: 1;
    margin: 0 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        margin: 0 30px;
    }
`;

export const Border = styled.div`
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