import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { Game } from './game';

export default function Pages() {
    return (
        <Router primary={false} component={Fragment}>
            <Game path="/" />
        </Router>
    );
}
