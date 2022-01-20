import React from 'react';
import styled from 'styled-components';

const Footer = ({children, boxCounter, disabled}) => {
    return (
        <>
            <FooterContainer style={{ visibility: disabled || boxCounter === 0 ? 'hidden' : 'visible'}}>
                <FooterLeftContent>
                    Choose {boxCounter} {boxCounter > 1 ? 'boxes' : 'box'}
                </FooterLeftContent>
                {children}
            </FooterContainer>
        </>
    );
};

export default Footer;

const FooterContainer = styled.div`
    display: flex;
    align-self: center;
    width: 100%;
    height: 20vh;
`;

const FooterLeftContent = styled.div`
    color: red;
    font-size: 40px;
    font-weight: bold;
    align-self: center;
    width: 50%;
    padding: 100px;
`;
