import React from 'react';
import FlowResult from './flow-result';

class FlowEditor extends React.Component {

    constructor(props) {
        super(props);
        this.handleNameFieldChange = this.handleNameFieldChange.bind(this);
        this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
    }

    handleNameFieldChange (event) {
        this.setState({ 'name': event.target.value });
    }

    handleSaveButtonClick (event) {
        console.log(event);
        console.log(this.props);
        this.props.editFlow(this.props.flow.id, this.state.name, []);
    }
    componentDidMount() {

    }
    render() {
        console.log('~~~~');
        console.log(this.props);
        return (
            <div>
                <label htmlFor="name">
                    <div>{this.props.flow.name} -- {this.props.flow.id}</div>
                    <input id="name" onChange={this.handleNameFieldChange} type="text" />
                </label>
                <button onClick={this.handleSaveButtonClick}>save</button>
            </div>
        );
    }
}

FlowEditor.propTypes = {
    editFlow: React.PropTypes.func.isRequired,
    flow: React.PropTypes.object.isRequired
};

export default FlowEditor;
