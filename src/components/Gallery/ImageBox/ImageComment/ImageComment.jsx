import './ImageComment.scss';

import React, { Component } from 'react';

export class ImageComment extends Component{
    render() {
        const { comments } = this.props;
        return (
            <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i
                className="fas fa-comment"
                aria-hidden="true"></i> {comments}
            </li>
        );
    }
}