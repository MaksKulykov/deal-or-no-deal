import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Box = ({boxNumber, disabled, value, onClick}) => {
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
            <BoxContent animate={animate}>
                <BoxBody onClick={handleClickChild}>
                    <BoxValue>
                        {value}
                    </BoxValue>
                    <BoxLid />
                    <BoxNumber>
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
    animation: ${props => (props.animate ? anim : '')} 1s ease-out;
    &:hover {
        transform: scale(1.1);
    }
`;

const anim = keyframes`
    0% {
        transform: scale(1, 1);
    }
    100% {
        transform: scale(0, 0);
    }
`;

const BoxBody = styled.div`
    position: relative;
    height: 100px;
    width: 100px;
    margin-top: 53.3333333333px;
    background-color: #cc231e;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
    background: linear-gradient(#762c2c,#ff0303);
    cursor: pointer;
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
    opacity: 0;
    transform: translateY(0%);
    transition: all 0.5s;
    margin: 0 auto;
    display: block;
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
    z-index: 2;
    width: 100%;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
`;
