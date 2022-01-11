import React, { useState } from 'react';
import styled from 'styled-components';

const Box = ({number}) => {
    const [visible, setVisible] = useState(true);
    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <BoxContainer onClick={handleClick} style={{ visibility: visible ? 'visible' : 'hidden'}}>
            {number}
        </BoxContainer>
    );
};

export default Box;

/** Box styled components */
const BoxContainer = styled.div`
    border-radius: 6;
    background-size: cover;
    background-color: green;
    background-position: center;
    display: flex;
    justify-content: center;
    width: 15%;
    height: 20px;
    margin: 5px;
    &:hover {
        background-color: red;
    }
    cursor: pointer;
`;
