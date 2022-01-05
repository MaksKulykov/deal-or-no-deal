import React, { Fragment } from 'react';
import { Router } from '@reach/router';
/** importing our pages */
import Game from './game';

export default function Pages() {
    return (
        <Router primary={false} component={Fragment}>
            <Game path="/" />
        </Router>
    );
}
