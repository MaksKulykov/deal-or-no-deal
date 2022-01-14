import React from 'react';
import styled from 'styled-components';

const MoneyBox = ({value, visibility}) => {

    return (
        <MoneyBoxContainer style={{ visibility: visibility}}>
            {String.fromCharCode(8364) + ' ' + value}
        </MoneyBoxContainer>
    );

};

export default MoneyBox;

/** Box styled components */
const MoneyBoxContainer = styled.div`
    border-radius: 6px;
    justify-content: center;
    width: 80%;
    height: auto;
    padding: 5px;
    margin: 5px;
    background-color: lightgreen;
    text-align: center;
    font-weight: bold;
    font-size: 25px;
`;
