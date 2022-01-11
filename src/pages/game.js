import React, { Component } from 'react';
import Layout from '../components/layout';
import Box from '../components/box';
import { NUMBERS } from '../constants/constants';

export class Game extends Component {

    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    renderBox = () => {
        let schaffledNumbers = [...NUMBERS];
        this.shuffleArray(schaffledNumbers);
        return schaffledNumbers.map(number => <Box key={number} number={number} />);
    };

    render() {
        return (
            <Layout grid>
                {this.renderBox()}
            </Layout>
        )
    }
}
