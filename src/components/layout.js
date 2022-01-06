import React from 'react';
import styled from 'styled-components';
import { unit } from '../globalStyles';

/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */
const Layout = ({ fullWidth, children, grid }) => {
    return (
        <>
            <PageContainer fullWidth={fullWidth} grid={grid}>
                {children}
            </PageContainer>
        </>
    );
};

export default Layout;

/** Layout styled components */
const PageContainer = styled.div`
    display: flex;
    justify-content: ${props => props.grid ? 'center' : 'top'};
    flex-direction: ${props => props.grid ? 'row' : 'column'};
    flex-wrap: wrap;
    align-self: center;
    flex-grow: 1;
    padding: ${props => props.fullWidth ? 0 : unit * 2};
    padding-bottom: ${unit * 5};
`;
