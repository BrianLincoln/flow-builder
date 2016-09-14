import React from 'react';

class FlowPlayback extends React.Component {

    constructor(props) {
        super(props);

        this.handlePlayClick = this.handlePlayClick.bind(this);

        this.state = {
            activeSlide: 0,
            playing: false,
            speed: 500
        };
    }

    handlePlayClick() {
        setInterval(() => {
            const nextSlide = this.state.activeSlide <= this.props.flow.steps.length ? this.state.activeSlide + 1 : 0;
            
            this.setState({ activeSlide: nextSlide });
        }, this.state.speed);
    }
    render() {
        const stepSlides = this.props.flow.steps.map((step, index) => {

            const slideClasses = index === this.state.activeSlide ? 'flow-playback-slide active' : 'flow-playback-slide';
            return (
                <div className={slideClasses} key={step._id}>
                    step# {index + 1} {step._id}
                    <img src={'http://localhost:8181/screenshots/' + step._id + '.png'} />
                </div>
            );
        });
        return (
            <div className="flow-playback">
                <div onClick={this.handlePlayClick}>play</div>
                {stepSlides}
            </div>
        );
    }
}

FlowPlayback.propTypes = {
    actions: React.PropTypes.object.isRequired,
    flow: React.PropTypes.object.isRequired,
    test: React.PropTypes.object.isRequired
};

export default FlowPlayback;
