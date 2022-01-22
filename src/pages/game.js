import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Layout from '../components/layout';
import Footer from '../components/footer';
import Box from '../components/box';
import SideBar from '../components/sideBar';
import MoneyBox from '../components/moneyBox';
import { COEFFICIENTS, NUMBERS, STEPS_AMOUNT } from '../constants/constants';
import { unit, widths } from '../globalStyles';

import './game.css';

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
                                                  disabled={this.state.showModal} />);
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

    calcBoxCounter = (arr) => {
        let x = arr.length;
        switch(x) {
            case 0:
                return 6;
            case 1:
                return 5;
            case 2:
                return 4;
            case 3:
                return 3;
            case 4:
                return 2;
            case 5:
                return 1;
            case 6:
                return 4;
            case 7:
                return 3;
            case 8:
                return 2;
            case 9:
                return 1;
            case 10:
                return 3;
            case 11:
                return 2;
            case 12:
                return 1;
            case 13:
                return 3;
            case 14:
                return 2;
            case 15:
                return 1;
            case 16:
                return 3;
            case 17:
                return 2;
            case 18:
                return 1;
            case 19:
                return 2;
            case 20:
                return 1;
            case 21:
                return 1;
            default:
                return 0
        }
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
                    <Footer disabled={this.state.showModal}
                            boxCounter={this.state.firstBoxNumber ? this.calcBoxCounter(this.state.selectedValues) : 1}>
                        {this.renderMainBox()}
                    </Footer>
                </Layout>
                <SideBar>
                    {this.renderRightMoneyList()}
                </SideBar>
                <Modal
                    isOpen={this.state.showModal}
                    style={modalStyles}
                    closeTimeoutMS={500}
                >
                    <ModalHeader>BANK'S OFFER</ModalHeader>
                    <ModalBody>
                        {String.fromCharCode(8364) + ' ' + this.calcBankSum()}
                    </ModalBody>
                    <ModalFooter>
                        <ModalButton onClick={this.handleCloseModal}>DEAL</ModalButton>
                        <ModalButton onClick={this.handleCloseModal}>NO DEAL</ModalButton>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '10',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: `${widths.regularPageWidth/2}px`,
        width: '100%',
        maxHeight: `${widths.regularPageWidth/3}px`,
        height: '100%',
        padding: `${unit*2}px`,
        paddingBottom: `${unit * 3}px`,
        background: 'linear-gradient(#ffd700,#b8860b)',
        border: 'none',
        borderRadius: `${unit}px`
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: '5'
    },
};

const ModalHeader = styled.div`
    text-align: center;
    font-size: 50px;
`;

const ModalBody = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 50px;
`;

const ModalFooter = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: space-between;
`;

const ModalButton = styled.button`
    width: 40%;
    border: none;
    border-radius: 4px;
    padding: 15px 32px;
    font-weight: bold;
    font-size: 20px;
    color: #ffd700;
    background-image: linear-gradient(#696969,#000000);
    &:hover {
        background-image: linear-gradient(#000000, #696969);
    }
`;
