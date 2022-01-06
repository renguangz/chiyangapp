import styled from "styled-components";

export const Container = styled.div`
    /* border: 1px solid steelblue; */
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 800px) {
        /* border: 2px solid green; */
        width: 90%;
    }
`;