import React from 'react';

class FlowPlaybackSlide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            src: this.props.src
        };
    }

    componentDidMount() {

        const img = new Image();

        img.onerror = () => {
            this.setState({
                src: './../explosion.gif'
            });
        };
        img.src = this.props.src;
    }

    render() {
        return (
            <img src={this.state.src} />
        );
    }
}

FlowPlaybackSlide.propTypes = {
    fallbackImage: React.PropTypes.string.isRequired,
    src: React.PropTypes.string.isRequired
};

export default FlowPlaybackSlide;
