import './Gallery.scss';

import React, { Component } from 'react';

import { ImageBox } from "./ImageBox";

export class Gallery extends Component {
    render(){
        const {pictures} = this.props;
        return(
            <main>
                <div className="container">
                    <div className="gallery">
                        {pictures.map((picture, idx) => <ImageBox key={idx} {...picture} />)}
                    </div>
                </div>
            </main>
        );
    }
}