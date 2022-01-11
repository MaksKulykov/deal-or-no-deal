import React, { Component } from 'react';
import Layout from '../components/layout';
import Box from '../components/box';
import { NUMBERS } from '../constants/constants';

export class Game extends Component {

    renderBox = () => {
        return NUMBERS.map(number => <Box key={number} number={number} />);
    };

    render() {
        return (
            <Layout grid>
                {this.renderBox()}
            </Layout>
        )
    }
}
