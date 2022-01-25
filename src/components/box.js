import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const Box = ({boxNumber, disabled, isGameFinish, value, onClick}) => {
    const [visible, setVisible] = useState(true);
    const [animate, setAnimate] = useState(false);
    const handleClickChild = () => {
        if (!disabled) {
            setTimeout(() => setVisible(!visible), 1000);
            setAnimate(!animate);
            onClick(boxNumber, value);
        }
    };

    return (
        <BoxContainer disabled={disabled} style={{visibility: visible ? 'visible' : 'hidden'}}>
            <BoxContent animate={animate} disabled={disabled}>
                <BoxBody onClick={handleClickChild} disabled={disabled} isGameFinish={isGameFinish}>
                    <BoxValue isGameFinish={isGameFinish}>
                        {String.fromCharCode(8364) + ' ' + value.toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    </BoxValue>
                    <BoxLid isGameFinish={isGameFinish} />
                    <BoxNumber isGameFinish={isGameFinish}>
                        {boxNumber}
                    </BoxNumber>
                </BoxBody>
            </BoxContent>
        </BoxContainer>
    );
};

export default Box;

/** Box styled components */
const BoxContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 15%;
    height: auto;
    padding: 5px;
    margin: 5px;
`;

const BoxContent = styled.div`
    width: 100%;
    height: 100%;
    animation: ${props => (props.animate ? hideBox : '')} 1s ease-out;
    ${props => !props.disabled && css`
        &:hover {
            transform: scale(1.1);
        }
   `}
`;

const hideBox = keyframes`
    0% {
        transform: scale(1, 1);
    }
    100% {
        transform: scale(0, 0);
    }
`;

const boxBodyAnim = keyframes`
    0% {
        transform: translate3d(0%, 0%, 0) rotate(0deg);
    }
    25% {
        transform: translate3d(0%, 25%, 0) rotate(20deg);
    }
    50% {
        transform: translate3d(0%, -15%, 0) rotate(0deg);
    }
    70% {
        transform: translate3d(0%, 0%, 0) rotate(0deg);
    }
`;

const boxLidAnim = keyframes`
    0%,
    42% {
        transform: translate3d(-50%, 0%, 0) rotate(0deg);
    }
    60% {
        transform: translate3d(-85%, -230%, 0) rotate(-25deg);
    }
    90%, 100% {
        transform: translate3d(-119%, 225%, 0) rotate(-70deg);
    }
`;

const boxValAnim = keyframes`
    0% {
        transform: translateY(0%);
        opacity: 0;
    }
    100% {
        transform: translateY(-125%);
        opacity: 1;
        z-index: 0;
    }
`;

const BoxBody = styled.div`
    position: relative;
    height: 100px;
    width: 100px;
    margin-top: 53.3333333333px;
    margin-left: auto; 
    margin-right: auto;
    background-color: #cc231e;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
    background: linear-gradient(#762c2c,#ff0303);
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    animation: ${props => (props.isGameFinish ? boxBodyAnim : '')} 1s 0.5s forwards ease-in-out;
    z-index: 1;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
        width: 60px;
        background: linear-gradient(#ffffff,#ffefa0)
    }
`;

const BoxValue = styled.div`
    animation: ${props => (props.isGameFinish ? boxValAnim : '')} 1s 1.5s forwards ease-in-out;
    margin: 0 auto;
    display: block;
    opacity: 0;
    background: linear-gradient(#ffd700,#b8860b);
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-weight: bold;
`;

const BoxLid = styled.div`
    position: absolute;
    z-index: 1;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    bottom: 90%;
    background-color: #cc231e;
    height: 20px;
    width: 110px;
    border-radius: 5%;
    box-shadow: 0 8px 4px -4px rgba(0, 0, 0, 0.3);
    animation: ${props => (props.isGameFinish ? boxLidAnim : '')} 1s 0.5s forwards ease-in-out;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
        width: 60px;
        background: linear-gradient(#ffefa0,#fff)
    }
`;

const BoxNumber = styled.div`
    position: absolute;
    display: block;
    bottom 20px;
    z-index: 2;
    width: 100%;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
`;
