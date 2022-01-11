import React from 'react';
import styled from 'styled-components';
import { unit, widths } from '../globalStyles';

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
    max-width: ${props => props.fullWidth ? null : widths.regularPageWidth}px;
    width: 100%;
    padding: ${props => props.fullWidth ? 0 : unit * 2}px;
    padding-bottom: ${unit * 5}px;
`;
