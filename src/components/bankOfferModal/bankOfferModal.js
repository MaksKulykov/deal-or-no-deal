import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { unit, widths } from '../../globalStyles';

import './bankOfferModal.css';

const BankOfferModal = ({ isGameFinish, calcBankSum, isOpen, handleEndGame, handleCloseModal }) => {

    return (
        <Modal
            isOpen={isOpen}
            style={modalStyles}
            closeTimeoutMS={300}
        >
            <ModalHeader>
                {isGameFinish ? 'CONGRATULATIONS!' : 'BANK\'S OFFER'}
            </ModalHeader>
            <ModalBody>
                {isGameFinish ? 'YOU WON' : calcBankSum}
            </ModalBody>
            <ModalFooter isGameFinish={isGameFinish}>
                {
                    isGameFinish ?
                        <ModalFooterContent>
                            {calcBankSum}
                        </ModalFooterContent> :
                        <>
                            <ModalButton onClick={handleEndGame}>DEAL</ModalButton>
                            <ModalButton onClick={handleCloseModal}>NO DEAL</ModalButton>
                        </>
                }
            </ModalFooter>
        </Modal>
    );

};

export default BankOfferModal;

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
    justify-content: ${props => props.isGameFinish ? 'center' : 'space-between'};
`;

const ModalFooterContent = styled.div`
    font-weight: bold;
    font-size: 70px;
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
