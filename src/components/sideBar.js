import React from 'react';
import styled from 'styled-components';
import { unit } from '../globalStyles';

const SideBar = ({ children }) => {
    return (
        <>
            <PageContainer>
                {children}
            </PageContainer>
        </>
    );
};

export default SideBar;

/** SideBar styled components */
const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    flex-grow: 1;
    width: auto;
    min-width: 200px;
    height: 100vh;
    padding: ${unit * 2}px;
    padding-bottom: ${unit * 5}px;
`;
