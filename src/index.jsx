import './assets/global.scss';

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Gallery } from './components/Gallery';
import { pictures } from './pictures';

class App extends Component
{
    render() {
        return (
            <Gallery pictures={pictures} />
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));