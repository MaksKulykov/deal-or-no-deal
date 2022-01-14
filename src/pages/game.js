import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Box from '../components/box';
import LeftSideBar from '../components/leftSideBar';
import RightSideBar from '../components/rightSideBar';
import MoneyBox from '../components/moneyBox';
import { NUMBERS } from '../constants/constants';

export class Game extends Component {

    state = {
        firstBoxCounter: null,
        firstBoxValue: null,
        selectedValues: []
    };

    handleClick = (counter, value) => {
        if (!this.state.firstBoxCounter) {
            this.setState({firstBoxCounter: counter, firstBoxValue: value});
        } else {
            this.setState({selectedValues: [...this.state.selectedValues, value]});
        }
    };

    renderBoxes = () => {
        const { numbers } = this.props;
        return numbers.map((value, index) => <Box key={value}
                                                  onClick={this.handleClick}
                                                  value={value}
                                                  counter={++index}
                                                  disabled={false} />);
    };

    renderMainBox = () => {
        return this.state.firstBoxCounter ?
            <Box key={'200001'}
                 value={this.state.firstBoxValue}
                 counter={this.state.firstBoxCounter}
                 disabled={true}/> : null;
    };

    renderLeftMoneyList = () => {
        let leftNumbers = [...NUMBERS].slice(0, 12);
        return leftNumbers.map(value => <MoneyBox key={value}
                                                            value={value}
                                                            visibility={this.state.selectedValues.indexOf(value) >= 0 ? 'hidden' : 'visible'} />);
    };

    renderRightMoneyList = () => {
        let rightNumbers = [...NUMBERS].slice(12);
        return rightNumbers.map(value => <MoneyBox key={value}
                                                            value={value}
                                                            visibility={this.state.selectedValues.indexOf(value) >= 0 ? 'hidden' : 'visible'} />);
    };

    render() {
        return (
            <>
                <LeftSideBar>
                    {this.renderLeftMoneyList()}
                </LeftSideBar>
                <Layout grid>
                    {this.renderBoxes()}
                    <Footer>
                        {this.renderMainBox()}
                    </Footer>
                </Layout>
                <RightSideBar>
                    {this.renderRightMoneyList()}
                </RightSideBar>
            </>
        )
    }
}

const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    width: 100%;
    height: 20vh;
    background-size: cover;
    background-color: lightgreen;
    background-position: center;
`;
