import React from "react";

const Player = props => {
    return (
        <div className="comment">
            <div className="content">
                <a href="/" className="author">
                    {props.name}
                </a>
            </div>
        </div>
    );
};

export default Player;
