import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Layout from '../components/layout';
import Box from '../components/box';
import SideBar from '../components/sideBar';
import MoneyBox from '../components/moneyBox';
import { COEFFICIENTS, NUMBERS, STEPS_AMOUNT } from '../constants/constants';

Modal.setAppElement(document.getElementById('root'));

export class Game extends Component {

    state = {
        firstBoxNumber: null,
        firstBoxValue: null,
        selectedValues: [],
        showModal: false,
        counter: 0
    };

    handleClick = (boxNumber, value) => {
        if (!this.state.firstBoxNumber) {
            this.setState({firstBoxNumber: boxNumber, firstBoxValue: value});
        } else {
            this.setState({selectedValues: [...this.state.selectedValues, value]}, () => {
                if (STEPS_AMOUNT.includes(this.state.selectedValues.length)) {
                    this.setState({showModal: true});
                }
            });
        }
    };

    renderBoxes = () => {
        const { numbers } = this.props;
        return numbers.map((value, index) => <Box key={value}
                                                  onClick={this.handleClick}
                                                  value={value}
                                                  boxNumber={++index}
                                                  disabled={false} />);
    };

    renderMainBox = () => {
        return this.state.firstBoxNumber ?
            <Box key={'200001'}
                 value={this.state.firstBoxValue}
                 boxNumber={this.state.firstBoxNumber}
                 disabled={true}/> : null;
    };

    renderLeftMoneyList = () => {
        let leftNumbers = [...NUMBERS].slice(0, 12);
        return leftNumbers.map(value => <MoneyBox key={value}
                                                            value={value}
                                                            animate={this.state.selectedValues.includes(value)}
                                                            reverse={true} />);
    };

    renderRightMoneyList = () => {
        let rightNumbers = [...NUMBERS].slice(12);
        return rightNumbers.map(value => <MoneyBox key={value}
                                                            value={value}
                                                            animate={this.state.selectedValues.includes(value)}
                                                            reverse={false} />);
    };

    calcBankSum = () => {
        let sum = 0;
        let values = [...NUMBERS];
        values.forEach(value => {
            if (!this.state.selectedValues.includes(value)) {
                sum = sum + parseInt(value);
            }
        });
        return Math.round(sum / (NUMBERS.length - this.state.selectedValues.length) / COEFFICIENTS[this.state.counter]);
    };

    handleCloseModal = () => {
        this.setState({counter: this.state.counter + 1});
        this.setState({showModal: false});
    };

    render() {
        return (
            <>
                <SideBar>
                    {this.renderLeftMoneyList()}
                </SideBar>
                <Layout grid>
                    {this.renderBoxes()}
                    <Footer>
                        {this.renderMainBox()}
                    </Footer>
                </Layout>
                <SideBar>
                    {this.renderRightMoneyList()}
                </SideBar>
                <Modal
                    isOpen={this.state.showModal}
                    style={modalStyles}
                >
                    <p>BANKER'S OFFER</p>
                    <p>
                        {this.calcBankSum()}
                    </p>
                    <button onClick={this.handleCloseModal}>DEAL</button>
                    <button onClick={this.handleCloseModal}>NO DEAL</button>
                </Modal>
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

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '10'
    },
    overlay: {
        backgroundColor: 'transparent',
        zIndex: '5'
    },
};
