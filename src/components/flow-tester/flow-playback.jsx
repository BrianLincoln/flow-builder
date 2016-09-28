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
            activeSlide: props.test.screenshots[0],
            activeSlideIndex: 0,
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

            const nextSlideIndex = this.state.activeSlideIndex < this.props.test.screenshots.length - 1 ? this.state.activeSlideIndex + 1 : 0;

            this.setState({
                activeSlide: this.props.test.screenshots[nextSlideIndex],
                activeSlideIndex: nextSlideIndex,
                playing: true
            });
        }, this.state.speed);
    }
    handleNextClick() {
        const nextSlideIndex = this.state.activeSlideIndex < this.props.test.screenshots.length - 1 ? this.state.activeSlideIndex + 1 : 0;
        console.log(this.props.test.screenshots.length);
        console.log(nextSlideIndex);
        console.log(this.props.test.screenshots[nextSlideIndex]);
        this.setState({
            playing: false,
            activeSlide: this.props.test.screenshots[nextSlideIndex],
            activeSlideIndex: nextSlideIndex
        });
    }
    handlePreviousClick() {
        const nextSlideIndex = this.state.activeSlideIndex === 0 ? this.props.test.screenshots.length - 1 : 0;

        this.setState({
            playing: false,
            activeSlide: this.props.test.screenshots[nextSlideIndex],
            activeSlideIndex: nextSlideIndex
        });
    }
    handlePauseClick() {
        this.setState({
            playing: false
        });
    }

    render() {
        switch (this.props.test.status) {
            case 'failed':
            case 'success':
            default:
                return (
                    <div className="col-xs-12 flow-playback">
                        <div className="flow-playback-header">
                            <samp>{this.state.activeSlideIndex + 1}.</samp>
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
                        <FlowPlaybackSlide fallbackImage={'./explosion.gif'} src={this.state.activeSlide.fullURL} />
                    </div>
                );
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
