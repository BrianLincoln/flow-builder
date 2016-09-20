import React from 'react';

const FlowPlaybackSlide = (props) => {
    return (
        <img className="flow-playback-slide" src={props.src} />
    );
};

FlowPlaybackSlide.propTypes = {
    fallbackImage: React.PropTypes.string.isRequired,
    src: React.PropTypes.string.isRequired
};

export default FlowPlaybackSlide;
