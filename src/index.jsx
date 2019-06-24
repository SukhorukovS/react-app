import './assets/global.scss';

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Gallery } from './components/Gallery';
import { Profile } from './components/Profile';
import { pictures } from './pictures';

class App extends Component
{
    render() {
        return (
            <div>
                <Profile />
                <Gallery pictures={pictures} />
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));