import React, { useState } from 'react';
import styled from 'styled-components';

const Box = ({counter, disabled, value, onClick}) => {
    const [visible, setVisible] = useState(true);
    const handleClickChild = () => {
        if (!disabled) {
            setVisible(!visible);
            onClick(counter, value);
        }
    };

    return (
        <BoxContainer onClick={handleClickChild} style={{ visibility: visible ? 'visible' : 'hidden'}}>
            <BoxBody>
                <BoxValue>
                    {value}
                </BoxValue>
                <BoxLid />
                <BoxNumber>
                    {counter}
                </BoxNumber>
            </BoxBody>
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
    cursor: pointer;
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
    &:hover {
        cursor: pointer;
        -webkit-animation: box-body 1s forwards ease-in-out;
                animation: box-body 1s forwards ease-in-out;
}
`;

const BoxValue = styled.div`
    opacity: 0;
    transform: translateY(0%);
    transition: all 0.5s;
    margin: 0 auto;
    display: block;
    &:hover {
        opacity: 1;
        z-index: 0;
        transform: translateY(-157px);
    }
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
    &:hover {
        -webkit-animation: box-lid 1s forwards ease-in-out;
                animation: box-lid 1s forwards ease-in-out;
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
