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