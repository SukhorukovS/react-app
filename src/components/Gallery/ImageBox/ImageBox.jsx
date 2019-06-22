import './ImageBox.scss';

import React, { Component } from 'react';
import Proptypes from 'prop-types';

import { ImageLike } from "./ImageLike";
import { ImageComment } from "./ImageComment";
import { BoxType } from "./BoxType";

export class ImageBox extends Component {
    render() {
        const { image, likes, comments, type } = this.props;
        return (
            <div className="gallery-item" tabIndex="0">
                <img src={image} className="gallery-image" alt="" />
                <BoxType type={type}/>
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

ImageBox.propTypes = {
    image: Proptypes.string,
    likes: Proptypes.number,
    comments: Proptypes.number,
};