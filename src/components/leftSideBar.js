import React from 'react';
import styled from 'styled-components';
import { unit } from '../globalStyles';

const LeftSideBar = ({ children }) => {
    return (
        <>
            <PageContainer>
                {children}
            </PageContainer>
        </>
    );
};

export default LeftSideBar;

/** LeftSideBar styled components */
const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    align-self: center;
    flex-grow: 1;
    width: auto;
    height: 100vh;
    padding: ${unit * 2}px;
    padding-bottom: ${unit * 5}px;
    background-size: cover;
    background-color: lemonchiffon;
    background-position: center;  
`;
