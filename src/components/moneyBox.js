import React from 'react';
import styled, { keyframes } from 'styled-components';
import { unit } from '../globalStyles';

const MoneyBox = ({animate, reverse, value}) => {

    return (
        <MoneyBoxContainer animate={animate} reverse={reverse}>
            {String.fromCharCode(8364) + ' ' + value.toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </MoneyBoxContainer>
    );

};

export default MoneyBox;

/** MoneyBox styled components */
const MoneyBoxContainer = styled.div`
    border-radius: 6px;
    width: 80%;
    min-width: 150px;
    height: auto;
    padding: 5px;
    margin: ${unit}px;
    background: ${props => (props.animate ? "linear-gradient(#762c2c,#ff0303)" : "linear-gradient(#ffd700,#b8860b)")};
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
