import React from 'react';
import FlowPlaybackSlide from './flow-playback-slide';

class FlowPlayback extends React.Component {

    constructor(props) {
        super(props);

        this.handlePlayClick = this.handlePlayClick.bind(this);
        this.finishPlayThrough = this.finishPlayThrough.bind(this);
        this.handlePauseClick = this.handlePauseClick.bind(this);

        this.state = {
            activeSlide: 0,
            playing: false,
            speed: 1000
        };
    }

    handlePlayClick() {
        this.setState({ playing: true, activeSlide: 0 });

        const playthrough = setInterval(() => {
            if (this.state.activeSlide >= this.props.flow.steps.length) {
                clearInterval(playthrough);
                this.finishPlayThrough();
                return;
            }
            const nextSlide = this.state.activeSlide <= this.props.flow.steps.length ? this.state.activeSlide + 1 : 0;
            this.setState({ activeSlide: nextSlide , playing: true });
        }, this.state.speed);
    }
    handlePauseClick() {
        this.setState({ playing: false });
    }
    finishPlayThrough() {
        this.setState({ playing: false });
    }
    render() {
        const stepSlides = this.props.flow.steps.map((step, index) => {
            const slideClasses = index === this.state.activeSlide ? 'flow-playback-slide active' : 'flow-playback-slide';
            const fallbackImage = './explosion.gif';
            return (
                <div className={slideClasses} key={step._id}>
                    <FlowPlaybackSlide fallbackImage={fallbackImage} src={'http://localhost:8181/screenshots/' + step._id + '.png'} />
                </div>
            );
        });

        switch (this.props.test.status) {
            case 'failed':
            case 'success':
                return (
                    <div className="col-xs-12 flow-playback">
                        <h3>
                            step {this.state.activeSlide + 1}
                            <span className="pull-right fa fa-play" onClick={this.handlePlayClick} />
                        </h3>
                        {stepSlides}
                    </div>
                );
            default:
                return null;
        }
    }
}

FlowPlayback.propTypes = {
    actions: React.PropTypes.object.isRequired,
    flow: React.PropTypes.object.isRequired,
    test: React.PropTypes.object.isRequired
};

export default FlowPlayback;
