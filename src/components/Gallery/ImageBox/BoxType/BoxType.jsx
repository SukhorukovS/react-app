import './BoxType.scss';

import React, { Component } from 'react';

export class BoxType extends Component {
    render()
    {
        const {type} = this.props;
        if (!['gallery', 'video'].includes(type)) {
            return null;
        }

        if (['gallery'].includes(type)) {
            return (
                <div className="gallery-item-type">
                    <span className="visually-hidden">{type}</span><i className="fas fa-clone" aria-hidden="true"></i>
                </div>
            );
        }

        return (
            <div className="gallery-item-type">
                <span className="visually-hidden">{type}</span><i className="fas fa-video" aria-hidden="true"></i>
            </div>
        );
    }
}