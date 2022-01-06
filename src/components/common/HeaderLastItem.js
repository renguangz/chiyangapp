import { SearchOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
    /* border: 2px solid red; */
    display: flex;
`;

const LastItem = styled.div`
    /* border: 2px solid gold; */
    margin: auto;
    margin-left: 42px;
`;

export const HeaderLastItem = () => {
    return (
        <ItemContainer>
            <LastItem style={{ fontSize: '20px' }}>
                <span>繁</span>
            </LastItem>
            <LastItem>
                <SearchOutlined style={{ fontSize: '23px' }} />
            </LastItem>
        </ItemContainer>
    )
}