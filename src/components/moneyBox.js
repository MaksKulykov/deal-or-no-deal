import React from 'react';
import styled, { keyframes } from 'styled-components';

const MoneyBox = ({animate, reverse, value}) => {

    return (
        <MoneyBoxContainer animate={animate} reverse={reverse}>
            {String.fromCharCode(8364) + ' ' + value}
        </MoneyBoxContainer>
    );

};

export default MoneyBox;

/** Box styled components */
const MoneyBoxContainer = styled.div`
    border-radius: 6px;
    width: 80%;
    height: auto;
    padding: 5px;
    margin: 5px;
    background-color: ${props => (props.animate ? "#ff0303" : "lightgreen")};
    text-align: center;
    font-weight: bold;
    font-size: 25px;
    animation: ${props => (props.animate ? (props.reverse ? leftAnim : rightAnim) : "")} 2s ease-in-out forwards;
`;

const rightAnim = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(120%);
    }
`;

const leftAnim = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-120%);
    }
`;
