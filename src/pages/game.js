import React, { Component } from 'react';
import Layout from '../components/layout';
import Box from '../components/box';
import LeftSideBar from '../components/leftSideBar';
import RightSideBar from '../components/rightSideBar';
import { NUMBERS } from '../constants/constants';
import styled from 'styled-components';

export class Game extends Component {

    state = {
        isRender: false,
        counter: null,
        value: null
    };

    componentDidMount() {
        this.setState({isRender: true})
    }

    handleClick = (counter, value) => {
        if (!this.state.counter) {
            this.setState({counter: counter, value: value});
        }
    };

    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    renderBox = () => {
        let schaffledNumbers = [...NUMBERS];
        if (!this.state.isRender) {
            this.shuffleArray(schaffledNumbers);
        }
        return schaffledNumbers.map((value, index) => <Box key={value} onClick={this.handleClick} value={value} counter={++index} />);
    };

    renderMainBox = () => {
        return this.state.counter ?
            <Box key={'200001'} value={this.state.value} counter={this.state.counter} /> : null;
    };

    render() {
        return (
            <>
                <LeftSideBar>

                </LeftSideBar>
                <Layout grid>
                    {this.renderBox()}
                    <Footer>
                        {this.renderMainBox()}
                    </Footer>
                </Layout>
                <RightSideBar>

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
