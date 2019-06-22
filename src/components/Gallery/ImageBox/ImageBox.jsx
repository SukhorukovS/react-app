import './ImageBox.scss';

import React, { Component } from 'react';
import { ImageLike } from "./ImageLike";
import {ImageComment} from "./ImageComment";

export class ImageBox extends Component {
    render() {
        const { image, likes, comments } = this.props;
        return (
            <div className="gallery-item" tabIndex="0">
                <img src={image} className="gallery-image" alt="" />
                    <div className="gallery-item-info">
                        <ul>
                            <ImageLike likes={likes} />
                            <ImageComment comments={comments} />
                        </ul>
                    </div>
            </div>
        );
    }
}