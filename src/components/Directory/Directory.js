import React from 'react';
import Items from './../../assets/items.jpg';
import Equipment from './../../assets/equipment.jpg'
import './directory.scss';

function Directory(props) {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${Equipment})`
                    }}
                >
                    <a href="#">
                        Shop Equipment
                    </a>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${Items})`
                    }}
                >
                    <a href="#">
                        Shop Items
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Directory;