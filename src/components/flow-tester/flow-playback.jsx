import React from 'react';
import FlowPlaybackSlide from './flow-playback-slide';

class FlowPlayback extends React.Component {

    constructor(props) {
        super(props);

        this.handlePlayClick = this.handlePlayClick.bind(this);
        this.handlePauseClick = this.handlePauseClick.bind(this);
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);

        this.state = {
            activeSlidePath: this.getStepScreenshotPathFromSlideNumber(1),
            activeSlideNumber: 1,
            playing: false,
            speed: 1000
        };
    }

    handlePlayClick() {
        this.setState({ playing: true });

        const playthrough = setInterval(() => {
            if (!this.state.playing) {
                clearInterval(playthrough);
                return;
            }

            const nextSlide = this.state.activeSlideNumber < this.props.slideCount ? this.state.activeSlideNumber + 1 : 1;

            this.setState({
                activeSlidePath: this.getStepScreenshotPathFromSlideNumber(nextSlide),
                activeSlideNumber: nextSlide,
                playing: true
            });
        }, this.state.speed);
    }
    handleNextClick() {
        if (this.state.activeSlideNumber >= this.props.slideCount) {
            return;
        }

        const nextSlide = this.state.activeSlideNumber + 1;

        this.setState({
            playing: false,
            activeSlidePath: this.getStepScreenshotPathFromSlideNumber(nextSlide),
            activeSlideNumber: nextSlide
        });
    }
    handlePreviousClick() {
        if (this.state.activeSlideNumber <= 1) {
            return;
        }

        const nextSlide = this.state.activeSlideNumber - 1;

        this.setState({
            playing: false,
            activeSlidePath: this.getStepScreenshotPathFromSlideNumber(nextSlide),
            activeSlideNumber: nextSlide
        });
    }
    handlePauseClick() {
        this.setState({
            playing: false
        });
    }
    getStepScreenshotPathFromSlideNumber(slideNumber) {
        const step = this.props.flow.steps[slideNumber - 1];

        return 'http://localhost:8181/screenshots/' + step._id + '.png';
    }

    render() {
        switch (this.props.test.status) {
            case 'failed':
            case 'success':
                return (
                    <div className="col-xs-12 flow-playback">
                        <div className="flow-playback-header">
                            <samp>{this.state.activeSlideNumber}.</samp>
                            <div className="flow-playback-controls pull-right">
                                <div className="flow-playback-control fa fa-chevron-left" onClick={this.handlePreviousClick} />
                                <div className="flow-playback-control fa fa-chevron-right" onClick={this.handleNextClick} />
                                {(() => {
                                    if (this.state.playing) {
                                        return <div className="flow-playback-control fa fa-pause" onClick={this.handlePauseClick} />;
                                    } else {
                                        return <div className="flow-playback-control fa fa-play" onClick={this.handlePlayClick} />;
                                    }
                                })()}
                            </div>
                        </div>
                        <FlowPlaybackSlide fallbackImage={'./explosion.gif'} src={this.state.activeSlidePath} />
                    </div>
                );
            default:
                return null;
        }
    }
}

FlowPlayback.propTypes = {
    actions: React.PropTypes.object.isRequired,
    failedStepNumber: React.PropTypes.number,
    flow: React.PropTypes.object.isRequired,
    slideCount: React.PropTypes.number.isRequired,
    test: React.PropTypes.object.isRequired
};

export default FlowPlayback;
