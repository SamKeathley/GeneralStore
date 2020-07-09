import React from 'react';
import './directory.scss';

function Directory(props) {
    return (
        <div className="directory">
            <div className="wrap">
                <div className="item">
                    <a>
                        Shop Equipment
                    </a>
                </div>
                <div className="item">
                    <a>
                        Shop Items
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Directory;